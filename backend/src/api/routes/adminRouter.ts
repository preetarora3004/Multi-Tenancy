import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { authAdminMiddleware } from "../auth/adminauth";

export const adminRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>()

adminRouter.post("/create/workspace", authAdminMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    try {
        const result = await prisma.$transaction(async (tx) => {
            const workspace = await tx.workspace.create({
                data: {
                    name: body.name,
                    description: body?.description,
                    tenantId: body.tenantId
                }
            })
        })
    }
    catch(e){
        c.status(403);
        c.json({
            msg : "Error while creating workspace" + e
        })
    }

})