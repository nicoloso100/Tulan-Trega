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
  location: string;
  phone?: string;
}
