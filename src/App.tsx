import React from 'react';
import { Box, Grommet, Text } from 'grommet';
import { theme } from './theme';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill direction="column">
        <Text>Hello world</Text>
      </Box>
    </Grommet>
  );
}

export default App;
