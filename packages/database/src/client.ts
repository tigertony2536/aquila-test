import { PrismaClient, TFgame } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const getSolFromDb = async (
  numbers: string
): Promise<string[] | undefined> => {
  const result = await prisma.tFgame.findFirst({ where: { numbers: numbers } });
  return result?.solutions;
};

type TFdata = Omit<TFgame, 'id'>;

export const CreateSolutions = async (numberSol: TFdata) => {
  const result = await prisma.tFgame.create({
    data: { numbers: numberSol.numbers, solutions: numberSol.solutions }
  });
  return result;
};
