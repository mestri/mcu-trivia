import React, { useContext, useEffect, useState } from 'react';
import { Box, Grommet, Text } from 'grommet';
import { theme } from './theme';
import axios from 'axios';
import { AppContext } from './context/AppContext';
import { generateQuestion } from './questionGenerator';
import { Trivia } from './components/Trivia';
import { Route, Routes } from 'react-router-dom';
import { User } from './components/User';

function App() {
  const { heroList, questionsList, setQuestionsList, reset, setReset } =
    useContext(AppContext);

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
    // setReset(false);
  }, []);

  useEffect(() => {
    console.log('movieList: ', moviesList);
    console.log('serieList: ', seriesList);
    const questions: any = [];

    if (
      moviesList.length > 0 &&
      seriesList.length > 0 &&
      (questionsList.length <= 1 || reset === true)
    ) {
      for (let i = 0; i < 30; i++) {
        questions.push(generateQuestion(moviesList, seriesList, heroList));
      }
      console.log('questions: ', questions);
      setQuestionsList(questions);
      setReset(false);
    }
  }, [moviesList, seriesList, reset]);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </Box>
    </Grommet>
  );
}

export default App;
