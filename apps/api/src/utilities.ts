// export const operate = (num1, num2, operator) => {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num1 / num2;
//   }
// };

export const permute = (nums: number[]): number[][] => {
  let result: number[][] = [];

  //Filter edge cases
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];

  //Start recursive loop
  for (let i = 0; i < nums.length; i++) {
    //Pop a number from array
    const currentNum = nums[i]!;
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]!);
      result.push(permutedArray);
    }
  }
  return result;
};

export const getAllOperatorSets = (): string[][] => {
  const operators = ['+', '-', '*', '/'];
  const allOperatorSets: string[][] = [];
  for (let i = 0; i <= operators.length - 1; i++) {
    for (let j = 0; j <= operators.length - 1; j++) {
      for (let k = 0; k <= operators.length - 1; k++) {
        allOperatorSets.push([operators[i]!, operators[j]!, operators[k]!]);
      }
    }
  }
  return allOperatorSets;
};

export const evalExpression = (expression: string) => {
  let result = Function('return ' + expression)();
  return result;
};

const mergeExpression = (numArr: number[], operatorArr: string[]): string[] => {
  let result: string[] = [];
  let numI = 0;
  let operI = 0;
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      result.push(numArr[numI]?.toString()!);
      numI++;
    } else {
      result.push(operatorArr[operI]!);
      operI++;
    }
  }
  return result;
};

export const getAllExpression = (
  numSetArr: number[][],
  operatorSetArr: string[][]
): string[][] => {
  const expressionSets = [];
  for (let i = 0; i < numSetArr.length; i++) {
    for (let j = 0; j < operatorSetArr.length; j++) {
      expressionSets.push(mergeExpression(numSetArr[i]!, operatorSetArr[j]!));
    }
  }
  return expressionSets;
};

const toString = (expressionArr: string[]): string => {
  let expressionString = '';
  for (let i = 0; i <= expressionArr.length - 1; i++) {
    expressionString += expressionArr[i];
  }
  return expressionString;
};

export const allExpArrToString = (expressionSets: string[][]): string[] => {
  let expStringArr: string[] = [];
  for (let i = 0; i <= expressionSets.length - 1; i++) {
    expStringArr.push(toString(expressionSets[i]!));
  }
  return expStringArr;
};

export const evalExArr = (expressionStringSets: string[]) => {
  for (let i = 0; i <= expressionStringSets.length - 1; i++) {
    expressionStringSets.splice(i, 1, evalExpression(expressionStringSets[i]!));
  }
  return expressionStringSets;
};

export const addParentheses = (expression: string): string => {
  const operators = ['+', '-', '*', '/'];
  const hierarchy: { [key: string]: number } = {
    '/': 3,
    '*': 2,
    '+': 1,
    '-': 1
  };
  let lastOperator: string = '';
  let newExp = '';
  for (let i = 0; i <= expression.length - 1; i++) {
    if (operators.includes(expression[i]!)) {
      if (lastOperator) {
        if (hierarchy[expression[i]!]! > hierarchy[lastOperator]!) {
          newExp =
            expression.slice(0, i - 1) +
            '(' +
            expression.slice(i - 1, i + 2) +
            ')' +
            expression.slice(i + 2);
        }
      } else {
        lastOperator = expression[i]!;
      }
    }
  }
  return newExp || expression;
};

export const stringToNum = (numString: string): number[] => {
  var numArray = numString.split('').map(function (item) {
    return parseInt(item, 10);
  });
  return numArray;
};

export const isFourNumbers = (numString: string): boolean => {
  if (numString.length !== 4) {
    return false;
  }
  const validNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numArray = stringToNum(numString);
  for (let i = 0; i <= numArray.length - 1; i++) {
    if (!validNumber.includes(numArray[i]!)) {
      return false;
    }
  }

  return true;
};
