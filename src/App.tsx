import React, { useContext, useEffect, useState } from 'react';
import { Box, Grommet, Text } from 'grommet';
import { theme } from './theme';
import axios from 'axios';
import { AppContext } from './context/AppContext';
import { generateQuestion } from './questionGenerator';
import { Trivia } from './Trivia';

function App() {
  const { heroList, questionsList, setQuestionsList } = useContext(AppContext);

  const [moviesList, setMoviesList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    axios
      .get('https://mcuapi.herokuapp.com/api/v1/movies')
      .then(function ({ data }) {
        console.log('movies: ', data.data);
        setMoviesList(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('https://mcuapi.herokuapp.com/api/v1/tvshows')
      .then(function ({ data }) {
        console.log('series: ', data.data);
        setSeriesList(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log('movieList: ', moviesList);
    console.log('serieList: ', seriesList);
    const questions: any = [];

    if (
      moviesList.length > 0 &&
      seriesList.length > 0 &&
      questionsList.length <= 1
    ) {
      for (let i = 0; i < 30; i++) {
        questions.push(generateQuestion(moviesList, seriesList, heroList));
      }
      console.log('questions: ', questions);
      setQuestionsList(questions);
    }
  }, [moviesList, seriesList]);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Trivia />
      </Box>
    </Grommet>
  );
}

export default App;
