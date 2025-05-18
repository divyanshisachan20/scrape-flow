"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function SetupUser() {
  const { userId } = await auth();
  console.log("🧪 SetupUser running for:", userId);

  if (!userId) {
    console.log("❌ No userId found — not authenticated");
    throw new Error("unauthenticated");
  }

  const balance = await prisma.userBalance.findUnique({ where: { userId } });

  if (!balance) {
  await prisma.userBalance.create({
    data: {
      userId,
      credits: 500,
    },
  });
} else if (balance.credits < 0) {
  await prisma.userBalance.update({
    where: { userId },
    data: {
      credits: 500,
    },
  });
}
   else {
    console.log("✅ UserBalance already exists");
  }

  redirect("/");
}
