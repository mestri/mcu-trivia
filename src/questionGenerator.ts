import {
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
  question_6,
  question_7,
  question_8,
  question_9,
  question_10,
  question_11,
  question_12
} from './questions';
import { randomNumber } from './utils';

const questions: any = [
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
  question_6,
  question_7,
  question_8,
  question_9,
  question_10,
  question_11,
  question_12
];

export const generateQuestion = (movies: any, series: any, heroes: any) => {
  const randomIdex = randomNumber(questions.length - 1);
  console.log('randomIdex: ', randomIdex);
  return questions[randomIdex](movies, series, heroes);
};
