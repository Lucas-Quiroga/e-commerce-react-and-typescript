import { createContext } from "react";
// import { CallFetch } from "../interfaces/CallFetch";
// export const CartContext = createContext({});

type CallFetchCategory = "male" | "female";

export interface CallFetch{
  id: number,
  userId: number,
  price: number,
  title: string,
  category: CallFetchCategory
}

export type TodoContextType = {
    itemsCart: CallFetch[];
    cleanCart: () => void;
    addToCart: (item: CallFetch) => void;
    deleteToCart: (id: number) => void;
  };

export const CartContext = createContext<TodoContextType | null>(null);