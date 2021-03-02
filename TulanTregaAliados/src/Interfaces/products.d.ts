declare interface ICreateProduct {
  name: string;
  measure: string;
  price: number;
  image?: string;
  store: string;
}

declare interface IUpdateProduct {
  name: string;
  measure: string;
  price: number;
  image?: string;
}

declare interface IProductItem {
  _id: string;
  name: string;
  image: string;
  measure: string;
}

declare interface IProduct {
  _id: string;
  name: string;
  image: string;
  measure: string;
  price: number;
  active: boolean;
}

declare interface ITriggerProduct {
  active: boolean;
}
