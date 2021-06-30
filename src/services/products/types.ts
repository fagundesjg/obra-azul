export interface IGetAllProductsProps {
  search?: string;
}

export interface IGetAllProductsResponse {
  products: IProduct[];
}

export interface IProduct {
  ean: string;
  name: string;
  fullname: string;
  price: string;
  picture: string;
  store: IStore;
}

export interface IStore {
  name: string;
  phone: string;
  location: ILocation;
}

export interface ILocation {
  zip_code: string;
  address: string;
  address_number: string;
  neighborhood: string;
  complement: null | string;
  city: string;
  state: string;
}
