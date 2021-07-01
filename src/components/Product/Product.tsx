import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Chip, Divider, Typography } from '@material-ui/core';
import { LocationOn as LocationOnIcon } from '@material-ui/icons';

import { Creators as CartActions } from '../../store/ducks/cart';
import { IProduct } from '../../services/products/types';
import * as S from './styles';

const Product = (props: IProduct) => {
  const { name, picture, price, store } = props;
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <S.Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <S.TitleContainer>
        <S.StoreName>{store.name}</S.StoreName>
        <S.StoreContainer>
          <LocationOnIcon color="primary" />
          <S.Name>{`${store.location.city} - ${store.location.state}`}</S.Name>
        </S.StoreContainer>
      </S.TitleContainer>
      <S.Image src={picture} />
      <S.Name>{name}</S.Name>
      <Divider />
      <S.Price hovered={hovered}>
        <Typography color="primary" variant="subtitle1">
          <Chip label={`R$ ${price}`} color="primary" />
        </Typography>
      </S.Price>
      <S.ActionsContainer hovered={hovered}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(CartActions.addItem(props))}
        >
          Adicionar ao carrinho
        </Button>
      </S.ActionsContainer>
    </S.Container>
  );
};

export { Product };
