import { gemini } from "@/lib/gemini";
import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

export async function generateCarrerInsights(userCareerProfile: User) {
  const prompt = `
  Anda adalah seorang career coach AI profesional.

  Berikut adalah informasi pengguna:
  - Bio: ${userCareerProfile.bio}
  - Industry yang diinginkan: ${userCareerProfile.industry}
  - Skills yang dimiliki: ${
    userCareerProfile.skills?.join(", ") || "Tidak ada skills"
  }
  - Pengalaman kerja: ${
    userCareerProfile.experience?.join(", ") || "Tidak ada pengalaman kerja"
  }
  - Latar belakang pendidikan: ${
    userCareerProfile.education?.join(", ") ||
    "Tidak ada latar belakang pendidikan"
  }

  Berdasarkan informasi tersebut, analisis dan berikan insight karier yang mendalam dalam format JSON dengan struktur sebagai berikut:

  {
    "salaryRange": "usahakan untuk membuat 5 data salaryRange" [
      {
        "role": "nama pekerjaan potensial",
        "min": nilai minimum gaji per bulan dalam USD atau konteks lokal (number),
        "max": nilai maksimum gaji per bulan (number),
        "median": estimasi gaji rata-rata (number),
        "location": "lokasi geografis atau negara"
      }
      ...
    ],
    "jobGrowth": "dalam bentuk persentase, misalnya: '12%'",
    "jobDemand": "pilihan dari ['HIGH', 'MEDIUM', 'LOW']",
    "topSkills": ["skill1", "skill2", ...],
    "marketOutlook": "pilihan dari ['GROWING', 'STABLE', 'SHRINKING']",
    "marketTrends": ["trend1", "trend2", ...],
    "recommendedSkills": ["skill1", "skill2", ...],
    "learningResources": ["nama kursus, buku, atau sumber belajar relevan"],
    "jobSearchStrategies": ["strategi1", "strategi2", ...],
    "networkingTips": ["tips1", "tips2", ...]
  }

  Pastikan semua informasi relevan dengan industri yang diinginkan dan memperhitungkan latar belakang pengguna secara logis dan realistis.

  Jawab hanya dalam format JSON tanpa penjelasan tambahan.`;

  const result = await gemini.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
}

export async function getCareerInsights() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      CarrerInsight: true,
    },
  });
  if (!user) throw new Error("User not found");

  try {
    if (!user.CarrerInsight) {
      const carrers = await generateCarrerInsights(user);

      const careerInsight = await db.carrerInsight.create({
        data: {
          industry: user.industry,
          ...carrers,
          nextUpdateAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
        },
      });

      return careerInsight;
    }

    return user.CarrerInsight;
  } catch (error) {
    throw new Error("Failed to generate career insights", { cause: error });
  }
}
