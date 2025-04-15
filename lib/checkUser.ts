import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export async function checkUser() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const userInDb = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    const fullName = `${user.firstName} ${user.lastName}`;

    if (!userInDb) {
      await prisma.user.create({
        data: {
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: fullName,
          imageUrl: user.imageUrl,
        },
      });
    }

    return userInDb;
  } catch (error) {
    console.error("Error checking user", error);
    return null;
  }
}
