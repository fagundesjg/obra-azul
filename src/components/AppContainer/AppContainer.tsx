import React from 'react';
import { MuiThemeProvider, Paper } from '@material-ui/core';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import { IThemeState } from '../../store/ducks/theme/types';
import { materialTheme } from '../../styles';
import * as S from './styles';

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  const useSelector: TypedUseSelectorHook<{
    theme: IThemeState;
  }> = useReduxSelector;
  const theme = useSelector((state) => state.theme.theme);

  return (
    <MuiThemeProvider theme={materialTheme[theme]}>
      <S.Container component={Paper}>{children}</S.Container>
    </MuiThemeProvider>
  );
};

export { AppContainer };
