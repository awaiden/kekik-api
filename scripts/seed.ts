import { faker } from "@faker-js/faker";

import { db } from "~/db";
import { comments, users, posts, type NewComment, type NewPost, type NewUser } from "~/db/schema";

async function seed() {
  console.log("Seeding database...");

  // clean up existing data
  await db.delete(comments);
  await db.delete(posts);
  await db.delete(users);

  const newUsers: NewUser[] = Array.from({ length: 100 }).map(() => ({
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));

  await db.insert(users).values(newUsers);

  const insertedUsers = await db.select().from(users);

  const newPosts: NewPost[] = Array.from({ length: 300 }).map(() => ({
    authorId: faker.helpers.arrayElement(insertedUsers).id,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
  }));

  const insertedPosts = await db.insert(posts).values(newPosts).returning();

  const newComments: NewComment[] = Array.from({ length: 500 }).map(() => ({
    postId: faker.helpers.arrayElement(insertedPosts).id,
    authorId: faker.helpers.arrayElement(insertedUsers).id,
    content: faker.lorem.sentences(2),
  }));

  await db.insert(comments).values(newComments);
}

seed()
  .then(() => {
    console.log("Seeding completed.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error during seeding:", error);
    process.exit(1);
  });
