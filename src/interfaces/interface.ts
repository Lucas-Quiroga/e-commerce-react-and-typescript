export interface Cart {
    id: number;
    name: string;
    value: number;
    stock: number;
}

export interface CartState{
    items: Cart[]
}