import "dotenv/config";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

import { db } from "~/db";
import { users, posts, comments } from "~/db/schema";

import pkg from "../package.json" assert { type: "json" };

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.json({
    message: "Hello, Welcome to Kekik API",
    description: pkg.description,
    name: pkg.name,
    version: pkg.version,
  });
});

app.get("/users", async (ctx) => {
  const allUsers = await db.select().from(users);
  return ctx.json(allUsers);
});

app.get("/users/:id", async (ctx) => {
  const id = ctx.req.param("id");
  const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  if (user) {
    return ctx.json(user);
  } else {
    return ctx.json({ error: "User not found" }, 404);
  }
});

app.get("/posts", async (ctx) => {
  const allPosts = await db.select().from(posts);
  return ctx.json(allPosts);
});

app.get("/posts/:id", async (ctx) => {
  const id = ctx.req.param("id");
  const [post] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  if (post) {
    return ctx.json(post);
  } else {
    return ctx.json({ error: "Post not found" }, 404);
  }
});

app.get("/comments", async (ctx) => {
  const allComments = await db.select().from(comments);
  return ctx.json(allComments);
});

app.get("/comments/:id", async (ctx) => {
  const id = ctx.req.param("id");
  const [comment] = await db.select().from(comments).where(eq(comments.id, id)).limit(1);
  if (comment) {
    return ctx.json(comment);
  } else {
    return ctx.json({ error: "Comment not found" }, 404);
  }
});

export default app;
