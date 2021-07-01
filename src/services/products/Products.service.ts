import { api } from '../api';
import { IGetAllProductsProps, IGetAllProductsResponse } from './types';

const ProductServices = {
  getAll: async (
    props?: IGetAllProductsProps
  ): Promise<IGetAllProductsResponse> => {
    const { search } = props ?? {};
    const query = search ? `search=${search}` : '';
    const { data } = await api.get<IGetAllProductsResponse>(
      `/recruitment/products?${query}`
    );
    return data;
  },
};

export { ProductServices };
