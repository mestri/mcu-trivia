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

  const answerOptions = [];
  let heroesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    heroesIdx.push(randomNumber(heroes.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = moreMovSeries.heroName;
    } else if (heroes[heroesIdx[i]].heroName !== moreMovSeries.heroName) {
      answerOptions[i] = heroes[heroesIdx[i]].heroName;
    } else {
      answerOptions[i] = 'You';
    }
  }
  console.log('correct: ', moreMovSeries.heroName);
  console.log('answerOptions: ', answerOptions);

  return {
    question: 'Who is the super hero that appears in more Series or Movies?',
    answer: moreMovSeries.heroName,
    options: answerOptions
  };
};

export const question_2 = (movies: any, series: any, heroes: any) => {
  const idx = randomNumber(heroes.length - 1);
  console.log('idx: ', idx);
  const selectedHero = heroes[idx];

  const answerOptions = [];
  let randomAnswer = null;
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    randomAnswer = randomNumber(20);
    if (i === answerIdx) {
      answerOptions[i] = selectedHero.movies.length.toString();
    } else if (
      randomAnswer.toString() !== selectedHero.movies.length.toString()
    ) {
      answerOptions[i] = randomAnswer.toString();
    } else {
      answerOptions[i] = '21';
    }
  }

  return {
    question: `In how many movies appears ${selectedHero.heroName} ?`,
    answer: selectedHero.movies.length.toString(),
    options: answerOptions
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

  const answerOptions = [];
  let directorIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    directorIdx.push(randomNumber(directors.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = answer;
    } else if (directors[directorIdx[i]].name !== answer) {
      answerOptions[i] = directors[directorIdx[i]].name;
    } else {
      answerOptions[i] = 'Dicaprio';
    }
  }

  console.log('directors options: ', answerOptions);
  return {
    question: `What directors or director has directed more Marvel movies or series?`,
    answer: answer,
    options: answerOptions
  };
};

export const question_4 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((max: any, current: any) => {
    if (max === false) {
      return current;
    }
    if (max.box_office >= current.box_office) {
      return max;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Avatar';
    }
  }

  return {
    question: `Which is the Marvel movie with the best box office ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_5 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((max: any, current: any) => {
    if (max === false) {
      return current;
    }
    if (max.duration >= current.duration) {
      return max;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Avatar';
    }
  }

  return {
    question: `Which is the movie longest duration ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_6 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((min: any, current: any) => {
    if (min === false) {
      return current;
    }
    if (min.duration <= current.duration) {
      return min;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Titanic';
    }
  }

  return {
    question: `Which is the Marvel shortest movie ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_7 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((min: any, current: any) => {
    if (min === false) {
      return current;
    }
    if (min.box_office <= current.box_office) {
      return min;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Avatar';
    }
  }

  return {
    question: `Which is the Marvel movie with a poor box office ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_8 = (movies: any, series: any, heroes: any) => {
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
  const answer = directors.reduce((min: any, current: any) => {
    if (min === false) {
      return current;
    }
    if (current.count < min.count && current.name !== '') {
      return current;
    }
    return min;
  }, false).name;

  const answerOptions = [];
  let directorIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    directorIdx.push(randomNumber(directors.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = answer;
    } else if (directors[directorIdx[i]].name !== answer) {
      answerOptions[i] = directors[directorIdx[i]].name;
    } else {
      answerOptions[i] = 'JLO';
    }
  }

  console.log('directors options: ', answerOptions);
  return {
    question: `What directors or director has directed fewer Marvel movies or series ?`,
    answer: answer,
    options: answerOptions
  };
};

export const question_9 = (movies: any, series: any, heroes: any) => {
  let moreMovSeries = heroes.reduce((min: any, current: any) => {
    if (min === false) {
      return current;
    }
    if (
      min.movies.length + min.series.length <=
      current.movies.length + current.series.length
    ) {
      return min;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let heroesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    heroesIdx.push(randomNumber(heroes.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = moreMovSeries.heroName;
    } else if (heroes[heroesIdx[i]].heroName !== moreMovSeries.heroName) {
      answerOptions[i] = heroes[heroesIdx[i]].heroName;
    } else {
      answerOptions[i] = 'You';
    }
  }
  console.log('correct: ', moreMovSeries.heroName);
  console.log('answerOptions: ', answerOptions);

  return {
    question:
      'Who is the super hero that appears in fewer Marvel Series or Movies?',
    answer: moreMovSeries.heroName,
    options: answerOptions
  };
};

export const question_10 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((max: any, current: any) => {
    if (max === false) {
      return current;
    }
    if (max.post_credit_scenes >= current.post_credit_scenes) {
      return max;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Fight Club';
    }
  }

  return {
    question: `Which is the Marvel movie with more post-credit scenes ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_11 = (movies: any, series: any, heroes: any) => {
  let BestBoxOffice = movies.reduce((min: any, current: any) => {
    if (min === false) {
      return current;
    }
    if (min.post_credit_scenes <= current.post_credit_scenes) {
      return min;
    } else {
      return current;
    }
  }, false);

  const answerOptions = [];
  let moviesIdx = [];
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    moviesIdx.push(randomNumber(movies.length - 1));
    if (i === answerIdx) {
      answerOptions[i] = BestBoxOffice.title;
    } else if (movies[moviesIdx[i]].title !== BestBoxOffice.title) {
      answerOptions[i] = movies[moviesIdx[i]].title;
    } else {
      answerOptions[i] = 'Star Wars';
    }
  }

  return {
    question: `Which is the Marvel movie with fewer post-credit scenes ?`,
    answer: BestBoxOffice.title,
    options: answerOptions
  };
};

export const question_12 = (movies: any, series: any, heroes: any) => {
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

  const idx = randomNumber(directors.length - 1);
  console.log('idx: ', idx);
  const selectedDirector = directors[idx];

  const answerOptions = [];
  let randomAnswer = null;
  let answerIdx = randomNumber(3);

  for (let i = 0; i < 4; i++) {
    randomAnswer = randomNumber(10);
    if (i === answerIdx) {
      answerOptions[i] = selectedDirector.count;
    } else if (randomAnswer !== selectedDirector.count) {
      answerOptions[i] = randomAnswer;
    } else {
      answerOptions[i] = '11';
    }
  }

  return {
    question: `How many movies were directed by ${selectedDirector.name} ?`,
    answer: selectedDirector.count,
    options: answerOptions
  };
};
