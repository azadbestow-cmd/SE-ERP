// dashboard-app/src/auth/login.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loginUser(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { username },
    include: { role: true },
  });

  if (!user || user.password !== password) {
    throw new Error("Invalid username or password");
  }
  return user;
}