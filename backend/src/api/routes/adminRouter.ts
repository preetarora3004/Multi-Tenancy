import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";

export const adminRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string,
    }
}>()