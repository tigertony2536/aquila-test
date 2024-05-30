import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const number = await prisma.tFgame.create({
    data: {
      numbers: '7213',
      solutions: [
        '7*3+2+1',
        '7*3+1+2',
        '2+(7*3)+1',
        '2+1+(7*3)',
        '2+1+(3*7)',
        '2+(3*7)+1',
        '1+(7*3)+2',
        '1+2+(7*3)',
        '1+2+(3*7)',
        '1+(3*7)+2',
        '3*7+2+1',
        '3*7+1+2'
      ]
    }
  });
  console.log(number);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
