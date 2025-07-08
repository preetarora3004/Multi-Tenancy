import { MiddlewareHandler } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware : MiddlewareHandler = async (c,next)=>{

    const jwt = c.req.header("Authorization")

    if(!jwt){
        c.status(401);
        return c.json({
            msg : "error : Unauthorized"
        })
    }

    const payload = await verify(jwt, c.env.JWT_SECRET);

    if(!payload){
        c.status(401);
        return c.json({
            msg : "Unauthorized"
        });
    }

    c.set("userId", payload.id);
    return await next();

}