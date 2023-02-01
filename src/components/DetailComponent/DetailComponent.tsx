import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailItemView from './DetailItemView/DetailItemView';
import { CallFetch } from '../../interfaces/CallFetch';
import api from '../../api';

type CallFetchCategory = "male" | "female";

type objectProps = {
  id?: number;
  userId?: number;
  price?: number;
  title?: string;
  category?: CallFetchCategory;
}


const DetailComponent = () => {

  const [object, setObject] = useState<CallFetch[]>([]) 


  const [detailObject, setDetailObject] = useState<objectProps>({})


  const [show, setShow] = useState(false);

  const {detailId}= useParams();


  useEffect(() => {
	  // api.then((resolve)=>  setObject(resolve.find((elem) => elem.id === parseInt(detailId)) 


    // // if (detailId) {
		// // 	setDetailObject(object.find((elemento) => elemento.id === parseInt(detailId)));
		// // 	setShow(true);
		// // } else {
		// // 	setShow(false)
		// // }
	}, [])

      // buscar con find el detalle

    // getObj.then(resp => setObject(resp.find(film => film.id === detailId)))
    

    // useEffect(() => {
    //   setShow(true)
    //   setTimeout(() => {
    //     setShow(false)
    //   }, 2000);
    // },[])


    useEffect(() => {
      setTimeout(() => {
        api.then(res => setObject(res))
      }, 2000);
      
    }, [])

    // useEffect(() => {
    //   if (detailId) {
    //     let searcheObject:CallFetch[] = object.find(e => e.id === parseInt(detailId))
    //     setDetailObject(searcheObject)
    //    }
    // }, [detailId])

    useEffect(() => {
      if (detailId) {
        const filtrado = object.find((elemento) => elemento.id === parseInt(detailId))
        //podria cambiarse a setResult pero solucionar con un if
        if (detailId && filtrado !== undefined) {
        return setDetailObject(filtrado)
        }
      }
  }, [detailId])

  // console.log(detailObject);
  
    
    
    
    

  return (
    <>
    {/* {show ? <div><h1>Cargando..</h1></div> :} */}
    {}
     <DetailItemView detailObject={detailObject} />
    </>
  )
}

export default DetailComponent