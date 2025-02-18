export type ProductPropTypes = {
  name?: string;
  color?: Array<string>;
  gender?: Array<string>;
  id?: number;
  image?: string;
  instock?: boolean;
  price?: number;
  size?: Array<string>;
  subimage?: Array<string>;
  type?: string;
};

export type UserPropTypes = {
  name?: string;
  email?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  loginMethod?: string;
};
