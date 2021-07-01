import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Badge,
  CircularProgress,
  IconButton,
  TextField,
} from '@material-ui/core';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import * as S from './styles';
import { colors } from '../../styles';
import { useThrottle } from '../../hocs';
import { ICartState } from '../../store/ducks/cart/types';
import { Creators as ProductsActions } from '../../store/ducks/products';
import { IProductsState } from '../../store/ducks/products/types';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<{
    cart: ICartState;
    products: IProductsState;
  }> = useReduxSelector;
  const cartProducts = useSelector((state) => state.cart.products);
  const loading = useSelector((state) => state.products.loading);
  const total = useMemo(
    () => cartProducts.reduce((prev, current) => prev + current.quant, 0),
    [cartProducts]
  );
  const [search, setSearch] = useThrottle<string>('', {
    throttle: 400,
    callback: (v) => dispatch(ProductsActions.fetchProducts({ search: v })),
  });

  const renderInputIcon = useCallback(() => {
    if (loading) {
      return <CircularProgress size={15} color="primary" />;
    } else if (!search) return <SearchIcon color="primary" />;
    else
      return (
        <IconButton size="small">
          <CloseIcon onClick={() => setSearch('')} color="primary" />
        </IconButton>
      );
  }, [search, loading, setSearch]);

  return (
    <S.Container>
      <S.Logo
        src="https://www.obrazul.com.br/loja/images/logo-w.png"
        onClick={() => history.push('/')}
      />
      <TextField
        variant="outlined"
        size="small"
        color="secondary"
        placeholder="Busque um produto"
        InputProps={{
          endAdornment: renderInputIcon(),
        }}
        className="search-input"
        value={search}
        onChange={(ev) => setSearch(ev.target.value ?? '')}
      />
      <Badge badgeContent={total} color="error">
        <IconButton onClick={() => history.push('/cart')}>
          <ShoppingCartIcon style={{ color: colors.white }} />
        </IconButton>
      </Badge>
    </S.Container>
  );
};

export { Navbar };
