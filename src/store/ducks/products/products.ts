import {
  IGetAllProductsProps,
  IProduct,
} from '../../../services/products/types';
import { IProductsAction, IProductsState } from './types';

const Types = {
  FETCH_PRODUCTS: 'products/FETCH_PRODUCTS',
  SET_PRODUCTS: 'products/SET_PRODUCTS',
  SET_LOADING: 'products/SET_LOADING',
};

const INITIAL_STATE: IProductsState = {
  products: [],
  loading: false,
};

function products(
  state = INITIAL_STATE,
  action: IProductsAction<any>
): IProductsState {
  switch (action.type) {
    case Types.SET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case Types.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}

const Creators = {
  fetchProducts: (props?: IGetAllProductsProps) => ({
    type: Types.FETCH_PRODUCTS,
    payload: props,
  }),
  setProducts: (products: IProduct[]) => ({
    type: Types.SET_PRODUCTS,
    payload: { products },
  }),
  setLoading: (loading: boolean) => ({
    type: Types.SET_LOADING,
    payload: { loading },
  }),
};

export { Types, Creators, products };
