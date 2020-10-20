import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      orange: '#FF5733',
      purple: '#A633FF',
      green: '#33FF73',
      white: '#FFFFFF',
      black: '#000000',
      cream: '#E9F6BC',
    },
  },
};

export default customTheme;
