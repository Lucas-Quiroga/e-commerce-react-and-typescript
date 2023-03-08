export type CallFetchCategory = "male" | "female";

export interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
  quantity: number;
}
