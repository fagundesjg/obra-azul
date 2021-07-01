import React, { useMemo } from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import { ICartState } from '../../store/ducks/cart/types';
import * as S from './styles';
import { CartItem } from '../../components';

const Cart = () => {
  const useSelector: TypedUseSelectorHook<{
    cart: ICartState;
  }> = useReduxSelector;
  const cartProducts = useSelector((state) => state.cart.products);
  const total = useMemo(
    () =>
      cartProducts.reduce(
        (prev, current) => prev + current.quant * +current.price,
        0
      ),
    [cartProducts]
  );

  return (
    <S.Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            Seu carrinho
          </Typography>
        </Grid>
      </Grid>
      {cartProducts.map((product, index) => (
        <Grid item xs={12} key={index}>
          <CartItem {...product} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <S.TotalContainer>
          <Grid container spacing={2} justify="flex-end">
            <Grid item xs={12} container justify="space-between">
              <Typography>Total</Typography>
              <Typography variant="h5">{`R$ ${total}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Finalizar compra
              </Button>
            </Grid>
          </Grid>
        </S.TotalContainer>
      </Grid>
    </S.Container>
  );
};

export { Cart };
