import { CallFetch } from "./interfaces/CallFetch";
import campera1 from './assets/campera1.jpeg'
import campera2 from './assets/campera2.jpg'
import campera3 from './assets/campera3.jpeg'
import buzo1 from './assets/buzo1.jpeg'
import buzo2 from './assets/buzo2.jpeg'
import buzo3 from './assets/buzo3.jpg'
import shoes1 from './assets/shoes1.jpg'
import shoes2 from './assets/shoes2.jpg'
import shoes3 from './assets/shoes3.jpg'

const PRODUCTOS: CallFetch[] = [
    {
      id: 1,
      userId: 1,
      price: 1102.51,
      title: "Campera Adidas Retro",
      category: "male",
      stock: 10,
      img: campera1,
    },
    {
      id: 2,
      userId: 2,
      price: 3424.41,
      title: "Kappa Hoodie Essential",
      category: "female",
      stock: 10,
      img: buzo1,
    },
    {
      id: 3,
      userId: 3,
      price: 2327.6,
      title: "Hoodie Basic Deep Blue",
      category: "male",
      stock: 10,
      img: buzo2,
    },
    {
      id: 4,
      userId: 4,
      price: 1242.8,
      title: "Nike Camaleon",
      category: "female",
      stock: 10,
      img: shoes1
    },
    {
      id: 5,
      userId: 5,
      price: 1580.2,
      title: "Nike Air Force 009",
      category: "female",
      stock: 10,
      img: shoes2,
    },
    {
      id: 6,
      userId: 6,
      price: 1580.2,
      title: "Nike Air Force Blood",
      category: "male",
      stock: 10,
      img: shoes3,
    },
    {
      id: 7,
      userId: 7,
      price: 1102.51,
      title: "Campera Nike Retro",
      category: "male",
      stock: 10,
      img: campera2,
    },
    {
      id: 8,
      userId: 8,
      price: 1102.51,
      title: "Campera Nike Old School",
      category: "male",
      stock: 10,
      img: campera3,
    },
    {
      id: 9,
      userId: 9,
      price: 2327.6,
      title: "Buzo Old",
      category: "female",
      stock: 10,
      img: buzo3,
    },
  ]

  const api = new Promise<CallFetch[]>((resolve)=>{
    setTimeout(()=> {
        return resolve(PRODUCTOS);
    },2000)
});

export default api