import { question_1 } from './questions';
import { randomNumber } from './utils';

const questions: any = [question_1];

export const generateQuestion = (movies: any, series: any, heroes: any) => {
  const randomIdex = randomNumber(questions.length - 1);
  console.log('randomIdex: ', randomIdex);
  return questions[randomIdex](movies, series, heroes);
};
