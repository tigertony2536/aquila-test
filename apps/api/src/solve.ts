import {
  permute,
  getAllOperatorSets,
  getAllExpression,
  allExpArrToString,
  evalExpression,
  addParentheses
} from './utilities.ts';

export const solveTF = (numArr: number[]) => {
  //Find all possible permutations of operands and combinations of operators
  const allPremutedArr = permute(numArr);
  const allCombinedOper = getAllOperatorSets();

  //Combine operands and opertors to find all possible expressions
  const allExp = getAllExpression(allPremutedArr, allCombinedOper);

  // Convert expression arrays to string and insert parentheses into corrent places
  const allExpStr = allExpArrToString(allExp);
  const allExpStrWithParentheses = allExpStr.map((exp) => addParentheses(exp));

  //evaluating expressions string and filtering unsatisfied expressions
  const allSolution = allExpStrWithParentheses.filter(
    (exp) => evalExpression(exp) === 24
  );

  return allSolution;
};
