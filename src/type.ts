export type AddDrinkButtonType = {
  name: string;
  price: number;
  imageUrl: string;
};

export type DrinkCardType = {
  name: string;
  price: number;
  imageUrl: string;
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
  name: string;
  price: number;
  imageUrl: string;
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
