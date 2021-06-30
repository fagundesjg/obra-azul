import { api } from '../api';
import { IGetAllProductsProps, IGetAllProductsResponse } from './types';

const ProductServices = {
  getAll: async (
    props?: IGetAllProductsProps
  ): Promise<IGetAllProductsResponse> => {
    const { data } = await api.get<IGetAllProductsResponse>(
      `/recruitment/products`
    );
    return data;
  },
};

export { ProductServices };
