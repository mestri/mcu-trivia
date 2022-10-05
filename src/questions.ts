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
