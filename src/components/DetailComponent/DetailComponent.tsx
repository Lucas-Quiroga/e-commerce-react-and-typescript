import React,{useState, useEffect} from 'react'
import DetailItemView from './DetailItemView/DetailItemView';

interface ObjectProps {
    id: number;
    title: string;
    price: number;
    imgPic: string;
    stock: number;
    features: string;
}

const obj:ObjectProps = {
    "id": 1,
    "title": "MDZX",
    "price": 120,
    "imgPic": "https://i.pinimg.com/564x/01/e6/45/01e6457c32c7356af72f18849ae03051.jpg",
    "stock": 1,
    "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition."
}

const DetailComponent = () => {

    const [object, setObject] = useState({})

    useEffect(() => {
      const getObj = new Promise<ObjectProps>(res => {
        setTimeout(() => {
            res(obj)
        }, 2000);
      })
    getObj.then(resp => setObject(resp))
    }, [])
    
    console.log(object);
    

  return (
    <>
    <DetailItemView object={object} />
    </>
  )
}

export default DetailComponent