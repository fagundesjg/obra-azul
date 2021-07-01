import { IProduct } from '../../../services/products/types';

export interface ICartProduct extends IProduct {
  quant: number;
}

export interface ICartState {
  products: ICartProduct[];
}

export interface ICartAction<T> {
  type: string;
  payload: T;
}
