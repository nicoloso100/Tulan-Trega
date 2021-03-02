declare type TAppContext = 'store' | 'rider';

declare type TInputSize = 'small' | 'medium' | 'large';

declare interface IAxiosResponse {
  ok: boolean;
  message: string;
  data: any;
}

declare interface ILocationCoords {
  latitude: number;
  longitude: number;
}

declare interface ILocation {
  address: string;
  latitude: number;
  longitude: number;
}
