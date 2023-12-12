export type AddDrinkButtonType = {
  name: string;
  price: number;
  imageUrl: string;
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
