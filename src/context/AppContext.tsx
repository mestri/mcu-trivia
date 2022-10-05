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

interface AppContextType {
  heroList: Array<HeroType>;
  setHeroList: any;
}

const initialHeroList: Array<HeroType> = heroes;

export const AppContext: Context<AppContextType> = createContext({
  heroList: initialHeroList,
  setHeroList: (heroList: Array<HeroType>) => {}
});

export const AppProvider = ({ children }: any) => {
  const [heroList, setHeroList] = useState(initialHeroList);

  return (
    <AppContext.Provider
      value={{
        heroList,
        setHeroList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
