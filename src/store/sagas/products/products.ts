import { call, put } from 'redux-saga/effects';

import { Creators as ProductsActions } from '../../ducks/products';
import { ProductServices } from '../../../services';
import {
  IGetAllProductsProps,
  IGetAllProductsResponse,
} from '../../../services/products/types';
import { IProductsAction } from '../../ducks/products/types';

function* fetchProducts(
  action: IProductsAction<IGetAllProductsProps | undefined>
) {
  try {
    yield put(ProductsActions.setLoading(true));
    const data: IGetAllProductsResponse = yield call(
      ProductServices.getAll,
      action.payload
    );
    yield put(ProductsActions.setProducts(data.products));
  } catch (err) {
  } finally {
    yield put(ProductsActions.setLoading(false));
  }
}

export { fetchProducts };
