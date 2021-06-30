import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons';

import { colors } from '../../styles';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.Logo src="https://www.obrazul.com.br/loja/images/logo-w.png" />
      <TextField
        variant="outlined"
        size="small"
        color="secondary"
        placeholder="Busque um produto"
        InputProps={{
          endAdornment: <SearchIcon color="primary" />,
        }}
        className="search-input"
      />
      <IconButton>
        <ShoppingCartIcon style={{ color: colors.white }} />
      </IconButton>
    </S.Container>
  );
};

export { Navbar };
