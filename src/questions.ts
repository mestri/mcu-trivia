import { randomNumber } from './utils';

export const question_1 = (movies: any, series: any, heroes: any) => {
  let moreMovSeries = heroes.reduce((max: any, current: any) => {
    if (max === false) {
      return current;
    }
    if (
      max.movies.length + max.series.length >=
      current.movies.length + current.series.length
    ) {
      return max;
    } else {
      return current;
    }
  }, false);

  return {
    question: 'Who is the super hero that appears in more Series or Movies?',
    answer: moreMovSeries.heroName
  };
};

export const question_2 = (movies: any, series: any, heroes: any) => {
  const idx = randomNumber(heroes.length - 1);
  console.log('idx: ', idx);
  const selectedHero = heroes[idx];

  return {
    question: `In how many movies appears ${selectedHero.heroName} ?`,
    answer: selectedHero.movies.length.toString()
  };
};

export const question_3 = (movies: any, series: any, heroes: any) => {
  const directors = movies.reduce((directorList: any, current: any) => {
    if (
      !directorList.find(
        (director: any) => current.directed_by === director.name
      )
    ) {
      return [
        ...directorList,
        {
          name: current.directed_by,
          count: 1
        }
      ];
    }
    return directorList.map((director: any) => {
      if (director.name === current.directed_by) {
        return {
          name: director.name,
          count: director.count + 1
        };
      }
      return director;
    });
  }, []);

  console.log('directors: ', directors);
  const answer = directors.reduce((max: any, current: any) => {
    if (max === false) {
      return current;
    }
    if (current.count > max.count && current.name !== '') {
      return current;
    }
    return max;
  }, false).name;

  return {
    question: `What directors or director has directed more Marvel movies or series?`,
    answer: answer
  };
};

export const question_4 = (movies: any, series: any, heroes: any) => {
  return '4';
};

export const question_5 = (movies: any, series: any, heroes: any) => {
  return '5';
};
