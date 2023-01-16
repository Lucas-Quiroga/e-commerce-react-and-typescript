import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
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

const arrayRopa:ObjectProps[]= [{ 
  "id": 1,
  "title": "Nike Windbreaker Jacket Blk 90s Retro",
  "price": 120,
  "imgPic": "https://i.pinimg.com/564x/01/e6/45/01e6457c32c7356af72f18849ae03051.jpg",
  "stock": 2,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition."
},
{ 
  "id": 2,
  "title": "Vintage 90s Nike Air Centre Swoosh Mesh",
  "price": 150,
  "imgPic": "https://i.pinimg.com/564x/9c/c4/d8/9cc4d8b9482fad5d27762547f82a3628.jpg",
  "stock": 1,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 3,
  "title": "Nike Old School 94 Sweatshirt",
  "price": 150,
  "imgPic": "https://i.pinimg.com/564x/f9/d2/6b/f9d26b97908ab6186062f192a557f1b5.jpg",
  "stock": 4,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 4,
  "title": "Vintage Long Sleeve Nike Collection",
  "price": 150,
  "imgPic": "https://i.pinimg.com/564x/46/69/fc/4669fc6ffb564b404f15de333ea9862f.jpg",
  "stock": 6,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 5,
  "title": "Nike Retro Black Sweatshirt",
  "price": 80,
  "imgPic": "https://i.pinimg.com/564x/86/59/b9/8659b95bddeca365a33edd5e41d69cb7.jpg",
  "stock": 3,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 6,
  "title": "Adidas T-70 Windbreaker",
  "price": 160,
  "imgPic": "https://i.pinimg.com/564x/88/fa/b2/88fab277c357dfd99a2374e34d624d54.jpg",
  "stock": 2,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 7,
  "title": "Adidas Purple VR23 Limited Edition",
  "price": 150,
  "imgPic": "https://i.pinimg.com/564x/eb/fa/49/ebfa49b0b9702df313e8799ed91ec8be.jpg",
  "stock": 7,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
},
{ 
  "id": 8,
  "title": "VTG WILSON Windbreaker Jacket",
  "price": 150,
  "imgPic": "https://i.pinimg.com/564x/1f/79/a0/1f79a0ab95bd07b7de7c85a01e89c891.jpg",
  "stock": 8,
  "features": "Vintage excellent condition still looks good in vintage, see all photos, the jacket itself is in very good condition.",
}]

const DetailComponent = () => {

    const {detailId} = useParams();

    const [object, setObject] = useState<ObjectProps>({
      "id": 0,
      "title": "",
      "price": 0,
      "imgPic": "",
      "stock": 0,
      "features": ""
  })



  const [show, setShow] = useState(false);

    useEffect(() => {
      const getObj = new Promise<ObjectProps[]>(res => {
        setTimeout(() => {
            res(arrayRopa)
        }, 2000);
      })
      // buscar con find el detalle

    // getObj.then(resp => setObject(resp.find(film => film.id === detailId)))
    
    
    }, [])

    useEffect(() => {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 2000);
    },[])
    
    

  return (
    <>
    {show ? <div><h1>Cargando..</h1></div> : <DetailItemView object={object} />}
    </>
  )
}

export default DetailComponent