export enum ACTIVE_FIELDS {
  SELL = "SELL",
  BUY = "BUY",
}
export interface Token {
  symbol: string;
  price: {
    currency: string;
    date: string;
    price: number;
  };
}
