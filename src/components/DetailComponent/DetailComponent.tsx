import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailItemView from './DetailItemView/DetailItemView';
import { CallFetch } from '../../interfaces/CallFetch';
import api from '../../api';

type objectProp = CallFetch[];

type paramString = {
  detailId: string;
}


const DetailComponent = () => {

  const [object, setObject] = useState() 
  const [detailObject, setDetailObject] = useState()
  const [show, setShow] = useState(false);

  const {detailId}= useParams();

   useEffect(() => {
        api.then((res) => setObject(res.find((prod) => prod.id === Number(detailId))))
    }, [])

//   useEffect(() => {
//     if(detailId) {
//       const filtrado = object.find((prod) => prod.id === Number(detailId))
//       setDetailObject(filtrado)
//     }
// }, [detailId])














   
  //   useEffect(() => {


  //     object.



  //         // .then((res) => {
  //         //     setItem(res.find((prod) => prod.id === Number(itemId) ))
  //         // })
  //         // .catch(err => console.log (err))
  //         // .finally(() => {
  //         //     setLoading(false)
  //         // })
  // }, [detailId])


  return (
    <>
     {/* <DetailItemView detailObject={detailObject} /> */}
     {detailObject}
    </>
  )
}

export default DetailComponent