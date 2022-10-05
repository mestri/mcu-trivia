import { createContext, useState, Context } from 'react';

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

const initialHeroList = [
  {
    id: '1',
    name: 'Bruce Wine',
    heroName: 'Batman',
    profilePhoto:
      '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80',
    abilities: ['ability1', 'ability2'],
    movies: ['1', '2'],
    series: ['5', '3']
  }
];

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
