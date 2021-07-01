import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { Creators as CartActions } from '../../store/ducks/cart';
import { ICartProduct } from '../../store/ducks/cart/types';
import * as S from './styles';

const CartItem = (props: ICartProduct) => {
  const { name, picture, store, quant, ean, price } = props;
  const dispatch = useDispatch();
  const total = quant * +price;

  return (
    <S.Container>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={6} md={3}>
          <S.Image src={picture} />
        </Grid>
        <Grid item xs={6} md={6} container>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              {`${store.name} - ${store.location.city} ${store.location.state}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{`${store.phone}`}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} container>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <IconButton onClick={() => dispatch(CartActions.removeOne(ean))}>
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>{quant}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => dispatch(CartActions.addOne(ean))}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Grid item>
              <Typography
                variant="caption"
                color="primary"
              >{`R$ ${total.toFixed(2)}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </S.Container>
  );
};

export { CartItem };
