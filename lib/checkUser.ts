import { currentUser } from "@clerk/nextjs/server";
import db from "./prisma";

export async function checkUser() {
  const user = await currentUser();
  console.log("User: ", user);
  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    console.log("Logged in user: ", loggedInUser);

    if (loggedInUser) {
      return loggedInUser;
    }

    const fullName = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        names: fullName,
        imageUrl: user.imageUrl,
      },
    });
    console.log("New user created: ", newUser);
    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error);
    return null;
  }
}
