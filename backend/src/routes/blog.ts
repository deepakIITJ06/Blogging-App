import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createPostInput,updatePostInput } from "@deepak_01/common";

// basically telling typescript that "url" & "jwt_secret" is --> string 
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c,next)=> {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if(user) {
            //@ts-ignore
            c.set("userId", user.id);
            await next();
        }else {
            c.status(403);
            return c.json({
                message: "You are not logged in",
            });
        }
    }catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in",
        });
    }
    next();
})

blogRouter.post('/', async (c) => {
    const authorId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const body = await c.req.json();
	const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: authorId,
		}
	});
	return c.json({
		id: post.id
	});
})

blogRouter.put("/", async (c)=> {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
	const post = await prisma.post.update({
        where: {
            id: body.id,
        },
		data: {
			title: body.title,
			content: body.content,
		}
	});
	return c.json({
		id: post.id,
        message: "post updated",
	});
})

blogRouter.get("/get/:id", async (c)=> {
    const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return c.json({
            post
        });
    }catch(e) {
        c.status(411);
        return c.json({
            message: "Error while fetching this post",
        })
    }
})

blogRouter.get("/bulk", async (c)=> {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true,
                },
            }
        },
    });

    // await Promise.all(blogs.map(async blog => {
    //     const author = await prisma.user.findUnique({
    //        where : { id : blog.author.id}
    //     })
    //     blog.author.name = author?.name || "Arnav";
    // }));

    return c.json({
        blogs,
    })
})