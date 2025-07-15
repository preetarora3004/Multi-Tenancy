import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";
import { authUserMiddleware } from "../auth/userauth";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId: string;
    };
}>();

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const hashpassword = await bcrypt.hash(body.password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                password: hashpassword,
                firstname: body.firstname,
                lastname : body.lastname,
                email: body.email,
                agreeToTerms : body.agreeToTerms,
                agreeToUpdates : body.agreeToUpdates
            },
        });

        if(body.agreeToTerms === false){
            c.status(411);
            c.json({
                msg : "Please Accept the Terms and Condition"
            })
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            token,
        });
    } catch (e) {
        c.status(403);
        return c.json({
            e,
        });
    }
});

userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (!user) {
        c.status(411);
        return c.json({
            msg: "Inavlid Credentials",
        });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
        token,
    });
});

userRouter.post("/create/tenant", authUserMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const userId = c.get("userId");

    try {
        const result = await prisma.$transaction(async (ts) => {
            const tenant = await ts.tenant.create({
                data: {
                    name: body.name,
                },
            });

            const userUpdate = await ts.user.update({
                where: {
                    id: userId, 
                },
                data: {
                    tenantId: tenant.id,
                    isOwner : true
                },
            });
        });

        return c.json({
            msg: "Successfully Created"  
        });
    } catch (e) {
        c.status(401);
        return c.json({
            msg: "Error creating tenant" + e
        });
    }

});
