import { createContext } from "react";
// import { CallFetch } from "../interfaces/CallFetch";
// export const CartContext = createContext({});

type CallFetchCategory = "male" | "female";

export interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
  img: string;
}

export type TodoContextType = {
  itemsCart: CallFetch[];
  cleanCart: () => void;
  addToCart: (obj: CallFetch) => void;
  deleteToCart: (id: number) => void;
  // totalCart:() => void;
  // totalCartPrice?: number;
};

export const CartContext = createContext<TodoContextType | null>(null);
