import {ShowErrorNotification} from '../../Utils/notifications';
import {
  DeleteRequest,
  GetRequest,
  PostRequest,
  PutRequest,
} from './AxiosHelper';
import {ProductsUrls} from './URLs';

export const CreateProduct = async (
  data: ICreateProduct,
): Promise<string | undefined> => {
  const result = await PostRequest(ProductsUrls.create, data);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const GetAllProducts = async (
  id: string,
): Promise<IProductItem[] | undefined> => {
  const result = await GetRequest(`${ProductsUrls.getAll}/${id}`);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const GetProductDetails = async (
  id: string,
): Promise<IProduct | undefined> => {
  const result = await GetRequest(`${ProductsUrls.getDetails}/${id}`);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const UpdateProduct = async (
  id: string,
  data: IUpdateProduct,
): Promise<string | undefined> => {
  const result = await PutRequest(id, ProductsUrls.update, data);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const DeleteProduct = async (
  id: string,
): Promise<string | undefined> => {
  const result = await DeleteRequest(id, ProductsUrls.delete);
  if (result.ok) {
    return result.message;
  } else {
    ShowErrorNotification(result.message);
  }
};

export const TriggerProduct = async (
  id: string,
  active: boolean,
): Promise<string | undefined> => {
  const params: ITriggerProduct = {
    active: active,
  };
  const result = await PutRequest(id, ProductsUrls.trigger, params);
  if (result.ok) {
    return result.data;
  } else {
    ShowErrorNotification(result.message);
  }
};
