import { CallFetch } from "./interfaces/CallFetch";

const PRODUCTOS: CallFetch[] = [
    {
      id: 1,
      userId: 1,
      price: 1102.51,
      title: "Guthrie Berry",
      category: "male",
      stock: 10,
      quantity: 1
    },
    {
      id: 2,
      userId: 2,
      price: 3424.41,
      title: "Kristie Jenkins",
      category: "female",
      stock: 10,
      quantity: 1
    },
    {
      id: 3,
      userId: 3,
      price: 2327.6,
      title: "Haynes Larson",
      category: "male",
      stock: 10,
      quantity: 1
    },
    {
      id: 4,
      userId: 4,
      price: 1242.8,
      title: "Nicole Stokes",
      category: "female",
      stock: 10,
      quantity: 1
    },
    {
      id: 5,
      userId: 5,
      price: 1580.2,
      title: "Sandy Gardner",
      category: "female",
      stock: 10,
      quantity: 1
    }
  ]

  const api = new Promise<CallFetch[]>((resolve)=>{
    setTimeout(()=> {
        return resolve(PRODUCTOS);
    },2000)
});

export default api