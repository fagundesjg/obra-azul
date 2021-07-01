import React, { Fragment } from 'react';
import { MuiThemeProvider, Paper } from '@material-ui/core';

import { materialTheme } from '../../styles';
import { Navbar } from '..';
import * as S from './styles';

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={materialTheme.light}>
      <S.Container component={Paper}>
        <Fragment>
          <Navbar />
          {children}
        </Fragment>
      </S.Container>
    </MuiThemeProvider>
  );
};

export { AppContainer };
