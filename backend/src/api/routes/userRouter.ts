import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    } 
}>()

userRouter.post("/signup", async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = c.req.json();

    const user = await prisma.User.create({
        
        data : {
            email : body.email,
            password : body.password,
            username : body.username
        }
    });

    const token = await sign({user.id}, c.env.JWT_SECRET);

    return c.json({
        token
    })

})

userRouter.post("/signin", async (c)=> {

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = c.req.json();

    const user = prisma.User.findUnique({
        where : {
            username : body.username,
            password : body.password
        }
    })

    if(!user){
        c.status(411);
        return c.json({
            msg : "Inavlid Credentials"
        })
    }

    const token = sign({user.username}, c.env.JWT_SECRET);
    
})