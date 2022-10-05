import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#2D2D2D',
      white: '#FFFFFF',
      black: '#000000',
      secBrand: '#666666',
      background: '#FFFFFF',
      secBg: '#F8F8F8',
      success: '#7fc425'
    },
    font: {
      family: 'Roboto',
      style: 'normal',
      size: '15px',
      height: '17px'
    }
  }
});
