export type AddDrinkButtonType = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  imageUrl: string;
  sugar: boolean;
  ice: boolean;
  hot: boolean;
  size: boolean;
  description: string;
};

export type DrinkCardType = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  imageUrl: string;
  sugar: boolean;
  ice: boolean;
  hot: boolean;
  size: boolean;
  description: string;
};

export type ShoppingCartType = {
  drinkName: string;
  drinkId: number;
  uuid: string;
  userId: string;
  price: number;
  sugar: string;
  ice: string;
  size: string;
};

export type UnaccptedOrderCardType = {
  orderNumber: string;
  phone: string;
  customerName: string;
  method: string;
  content: Array<any>;
};

export type AlterDrinksType = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  imageUrl: string;
  sugar: boolean;
  ice: boolean;
  hot: boolean;
  size: boolean;
  description: string;
};

export type HistoryOrderCardType = {
  time: string;
  drinks: Array<any>;
};

export type CurrentOrderCardType = {
  time: string;
  drinks: Array<any>;
};

export type CurrentCouponType = {
  id: number;
  uuid: string;
  code: string;
  expireDatetime: number;
  discount: number;
  usetimes: number;
};
