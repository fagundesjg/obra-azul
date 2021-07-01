import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import { Product } from '../../components';
import { Creators as ProductsActions } from '../../store/ducks/products';
import { IProductsState } from '../../store/ducks/products/types';
import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<{
    products: IProductsState;
  }> = useReduxSelector;
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(ProductsActions.fetchProducts());
  }, [dispatch]);

  return (
    <S.Container>
      <Grid container spacing={2}>
        {products.map((p, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <Product {...p} />
          </Grid>
        ))}
      </Grid>
    </S.Container>
  );
};

export { Home };
