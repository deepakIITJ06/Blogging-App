import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput,signinInput } from "@deepak_01/common";

// basically telling typescript that "url" & "jwt_secret" is --> string 
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "Invalid username/password" });
	}
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password,
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    
        return c.json({
            jwt: token
        })
    }catch(e) {
        c.status(403);
        return c.json({
            message: "Error while signing up",
        })
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
    //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid username/password" });
	}
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password,
        }
    });

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
})