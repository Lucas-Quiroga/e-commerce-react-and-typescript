import { createContext } from "react";
import { CallFetch } from "../interfaces/CallFetch";

export type TodoContextType = {
    itemsCart: CallFetch[];
    cleanCart: () => void;
    addToCart: (item: CallFetch) => void;
    deleteToCart: (id: number) => void;
    // totalCart:() => void;
    // totalCartPrice?: number;
  };

export const CartContext = createContext<TodoContextType | null>(null);