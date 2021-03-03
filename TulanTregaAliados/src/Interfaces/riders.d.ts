declare interface IRider {
  _id: string;
  enabled: boolean;
  email: string;
  name: string;
  image: string;
  phone: string;
}

declare interface IUpdateRider {
  name: string;
  image?: string;
  phone: string;
}
