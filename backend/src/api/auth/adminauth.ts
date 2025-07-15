import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { MiddlewareHandler } from "hono";
import { decode, verify } from "hono/jwt";

export const authAdminMiddleware : MiddlewareHandler = async (c, next)=>{

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const header = c.req.header("Authorization") || "";

    const parse = await verify(header, c.env.JWT_SECRET);

    if(!parse){
        c.status(411);
        return c.json({
            msg : "Not Authorized"
        })
    }

    const decoded = decode(header);

    const admin = await prisma.user.findUnique({
        where : {
            id : decoded.payload.id
        }
    })

    if(admin.isOwner){
        await next();
    }
    else{
        c.status(411);
        return c.json("Unauthorized");
    }

}