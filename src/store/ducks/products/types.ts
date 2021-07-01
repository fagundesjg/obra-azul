import { IProduct } from '../../../services/products/types';

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
}

export interface IProductsAction<T> {
  type: string;
  payload: T;
}
