import { createContext, useState, Context } from 'react';
import heroes from '../heroes.json';

interface HeroType {
  id: string;
  name: string;
  heroName: string;
  profilePhoto: string;
  abilities: Array<string>;
  movies: Array<string>;
  series: Array<string>;
}

interface QuestionType {
  question: string;
  answer: any;
  options: Array<any>;
}

interface AppContextType {
  heroList: Array<HeroType>;
  setHeroList: any;
  questionsList: Array<QuestionType>;
  setQuestionsList: any;
  reset: any;
  setReset: any;
}

const initialHeroList: Array<HeroType> = heroes;
const initialQuestionList: Array<QuestionType> = [
  {
    question: '',
    answer: '',
    options: []
  }
];

export const AppContext: Context<AppContextType> = createContext({
  heroList: initialHeroList,
  setHeroList: (heroList: Array<HeroType>) => {},
  questionsList: initialQuestionList,
  setQuestionsList: (questionsList: Array<QuestionType>) => {},
  reset: false,
  setReset: (reset: boolean) => {}
});

export const AppProvider = ({ children }: any) => {
  const [heroList, setHeroList] = useState(initialHeroList);
  const [questionsList, setQuestionsList] = useState(initialQuestionList);
  const [reset, setReset] = useState(false);

  return (
    <AppContext.Provider
      value={{
        heroList,
        setHeroList,
        questionsList,
        setQuestionsList,
        reset,
        setReset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
