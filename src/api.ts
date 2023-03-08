import { CallFetch } from "./interfaces/CallFetch";
import pic1 from './assets/pic1.jpeg'
import pic2 from './assets/pic2.jpeg'
import pic3 from './assets/pic3.jpeg'
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
      img: pic1
    },
    {
      id: 2,
      userId: 2,
      price: 3424.41,
      title: "Kappa Hoodie Essential",
      category: "female",
      stock: 10,
      img: pic2,
    },
    {
      id: 3,
      userId: 3,
      price: 2327.6,
      title: "Hoodie Basic Deep Blue",
      category: "male",
      stock: 10,
      img: pic3,
    },
    {
      id: 4,
      userId: 4,
      price: 1242.8,
      title: "Nike Camaleon",
      category: "female",
      stock: 10,
      img: shoes1,
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
  ]

  const api = new Promise<CallFetch[]>((resolve)=>{
    setTimeout(()=> {
        return resolve(PRODUCTOS);
    },2000)
});

export default api