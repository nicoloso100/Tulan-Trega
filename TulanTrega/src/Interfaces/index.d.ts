declare type TAppContext = 'store' | 'rider';

declare type TInputSize = 'small' | 'medium' | 'large';

declare interface IAxiosResponse {
  ok: boolean;
  message: string;
  data: any;
}
