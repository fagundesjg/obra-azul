import { createMuiTheme } from '@material-ui/core';
import { colors } from './colors';

const materialTheme = {
  dark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: colors.blue,
      },
      secondary: {
        main: colors.darkBlue,
      },
    },
    overrides: {},
  }),
  light: createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: colors.blue,
      },
      secondary: {
        main: colors.darkBlue,
      },
    },
    overrides: {},
  }),
};

export { materialTheme };
