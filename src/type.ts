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

export type AdminOrderType = {
  id: number;
  userName: string;
  userId: string;
  payMethod: string;
  orderId: string;
  orderDeliveryTime: number;
  totalPrice: number;
  couponCode: string;
  menu: Array<any>;
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

export type OrderCardType = {
  time: string;
  drinkId: string;
  drinkPrice: number;
  ice: string;
  sugar: string;
  size: string;
  id: number;
  menu: Array<any>;
};

export type OrderType = {
  id: number;
  orderId: string;
  orderDeliveryTime: number;
  totalPrice: number;
  couponCode: string;
  orderStatus: string;
  menu: Array<any>;
};

export type CurrentCouponType = {
  id: number;
  uuid: string;
  code: string;
  expireDatetime: number;
  discount: number;
  usetimes: number;
};

export type ReportType = {
  year: number;
  month: number;
  drinkName: [];
  drinkPrice: [];
  drinksAmount: [];
};
