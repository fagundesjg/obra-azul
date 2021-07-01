import { IProduct } from '../../../services/products/types';
import { ICartAction, ICartProduct, ICartState } from './types';

const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
  ADD_ONE: 'cart/ADD_ONE',
  REMOVE_ONE: 'cart/REMOVE_ONE',
};

const INITIAL_STATE: ICartState = {
  products: [],
};

function cart(state = INITIAL_STATE, action: ICartAction<any>): ICartState {
  const product = state.products.find((p) => p.ean === action.payload?.ean);

  switch (action.type) {
    case Types.ADD_ITEM:
      return product
        ? state
        : {
            ...state,
            products: [
              ...state.products,
              { ...action.payload.product, quant: 1 },
            ],
          };
    case Types.REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((p) => p.ean !== action.payload.ean),
      };
    case Types.ADD_ONE:
      return {
        ...state,
        products: product
          ? state.products.map((p) =>
              p.ean === product.ean ? { ...p, quant: p.quant + 1 } : p
            )
          : state.products,
      };
    case Types.REMOVE_ONE:
      return {
        ...state,
        products: state.products.reduce(
          (prev: ICartProduct[], current: ICartProduct) => {
            if (current.ean === action.payload.ean) {
              if (current.quant > 1) {
                return [...prev, { ...current, quant: current.quant - 1 }];
              } else if (current.quant === 1) {
                return prev;
              }
            }
            return [...prev, current];
          },
          []
        ),
      };
    default:
      return state;
  }
}

const Creators = {
  addItem: (product: IProduct) => ({
    type: Types.ADD_ITEM,
    payload: { product },
  }),
  removeItem: (ean: string) => ({
    type: Types.REMOVE_ITEM,
    payload: { ean },
  }),
  addOne: (ean: string) => ({
    type: Types.ADD_ONE,
    payload: { ean },
  }),
  removeOne: (ean: string) => ({
    type: Types.REMOVE_ONE,
    payload: { ean },
  }),
};

export { Types, Creators, cart };
