import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Sirf name daal rahe hain, id database khud banayega
  const role = await prisma.role.create({ data: { name: 'Admin' } });
  await prisma.user.create({
    data: { username: 'admin', password: '123', roleId: role.id }
  });
  console.log("Admin User Created!");
}
main();