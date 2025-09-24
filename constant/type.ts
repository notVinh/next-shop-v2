export type UserPropTypes = {
  name: string | undefined | null;
  email: string | undefined | null;
  image: string | undefined | null;
  method: "default" | "oauth";
};

export type ProductPropTypes = {
  name?: string;
  color?: Array<string>;
  gender?: Array<string>;
  id?: number;
  image?: string;
  brand?: string;
  desc?: string;
  instock?: boolean;
  price?: number;
  size?: Array<string>;
  subimage?: Array<string>;
  type?: string;
  gentle?: string;
  amount?: number;
  active?: boolean;
};

export type CartItemPropTypes = {
  itemId: number;
  variantId: string;
  image?: string;
  name?: string;
  size?: string | undefined[];
  color?: string | undefined[];
  amount: number;
  price: number;
};

export type InfoOrderPropTypes = {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  state: string;
  method?: string | "Momo" | "Paypal" | "Cash";
};
