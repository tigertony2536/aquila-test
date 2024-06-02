import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { solveTF } from './solve.js';
import { stringToNum, isFourNumbers } from './utilities.js';
import { getSolFromDb, CreateSolutions } from '@repo/database';

dotenv.config();

const app = express();
const port = process.env.API_PORT || '8000';

app.get('/cheat24?', async (req: Request, res: Response) => {
  const number = req.query.number;
  if (typeof number === 'string' && isFourNumbers(number)) {
    let solutions = await getSolFromDb(number);
    if (solutions !== undefined) {
      console.log('solution available', solutions);
    } else {
      const numArr = stringToNum(number);
      solutions = solveTF(numArr);
      if (solutions.length === 0) {
        res.json('No solution');
        return;
      } else {
        const result = await CreateSolutions({
          numbers: number,
          solutions: solutions
        });
        console.log('save new solutions', result);
      }
    }
    res.json(solutions);
  } else {
    res.send('Required  4 valid numbers');
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
