declare interface IValidateUser {
  email: string;
  password: string;
}

declare interface ICreateUser {
  email: string;
  password: string;
}

declare interface IStore {
  _id: string;
  enabled: boolean;
  email: string;
  name: string;
  logo: string;
  location: ILocation;
  phone?: string;
}

declare interface IUpdateStore {
  name: string;
  logo?: string;
  location: ILocation;
  phone?: string;
}
