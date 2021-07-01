import { all, takeEvery } from 'redux-saga/effects';

import { Types as ProductsTypes } from '../ducks/products';
import { fetchProducts } from './products';

export default function* rootSaga() {
  yield all([takeEvery(ProductsTypes.FETCH_PRODUCTS, fetchProducts)]);
}
