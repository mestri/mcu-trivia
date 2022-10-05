import React, { useContext, useEffect, useState } from 'react';
import { Box, Grommet, Text } from 'grommet';
import { theme } from './theme';
import axios from 'axios';
import { AppContext } from './context/AppContext';

function App() {
  const { heroList } = useContext(AppContext);

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

  return (
    <Grommet theme={theme} full>
      <Box fill direction="column">
        <Text>Hello world</Text>
      </Box>
    </Grommet>
  );
}

export default App;
