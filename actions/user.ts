"use server";

import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { OnboardingData } from "@/app/(onboarding)/_context/onboarding-context";

export async function updateUser(data: OnboardingData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(async (tx) => {
      // Check the industry using findFirst instead of findUnique
      let carrerInsight = await tx.carrerInsight.findFirst({
        where: {
          industry: data.biography.industry,
        },
      });

      // If it's empty, AI generate by your personality from about
      if (!carrerInsight) {
        carrerInsight = await tx.carrerInsight.create({
          data: {
            industry: data.biography.industry,
            salaryRange: [],
            jobGrowth: 0,
            jobDemand: "MEDIUM",
            topSkills: [],
            makertOutlook: "STABLE",
            marketTrends: [],
            recommendedSkills: [],
            learningResources: [],
            jobSearchStrategies: [],
            networkingTips: [],
            lastUpdatedAt: new Date(),
            nextUpdateAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
            userId: user.id,
          },
        });
      }

      // update the user
      const updatedUser = await tx.user.update({
        where: {
          id: user.id,
        },
        data: {
          industry: data.biography.industry,
          bio: data.biography.about,
          experience: data.experiences,
          education: data.education,
        },
      });

      return {
        user: updatedUser,
        carrerInsight,
      };
    });

    return result;
  } catch (error) {
    console.error("Failed to update user", error);
    throw new Error("Failed to update user");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Failed to get user onboarding status", error);
    throw new Error("Failed to get user onboarding status");
  }
}
