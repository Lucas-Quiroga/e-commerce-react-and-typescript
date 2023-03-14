import { createContext } from "react";
import { CallFetch } from "../interfaces/CallFetch";

export type TodoContextType = {
  itemsCart: CallFetch[];
  getBuy: {};
  cleanCart: () => void;
  addToCart: (obj: CallFetch) => void;
  deleteToCart: (id: number) => void;
  totalPrice: () => void;
  setItemsCart: (items: CallFetch[]) => void;
  // totalCart:() => void;
  // totalCartPrice?: number;
};

export const CartContext = createContext<TodoContextType | null>(null);
