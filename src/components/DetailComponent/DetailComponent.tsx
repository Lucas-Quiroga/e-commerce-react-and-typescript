import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailItemView from './DetailItemView/DetailItemView';
import { CallFetch } from '../../interfaces/CallFetch';
import api from '../../api';


const DetailComponent = () => {

  const [object, setObject] = useState<CallFetch | undefined>()
  const [detailObject, setDetailObject] = useState<CallFetch[]>([])
  const [show, setShow] = useState(false);

  const {detailId}= useParams<string>();


  useEffect(() => {
	  api.then((resolve)=>  setObject(resolve.find((elem) => elem.id === parseInt(detailId? detailId : "")))) 


    // if (detailId) {
		// 	setDetailObject(object.find((elemento) => elemento.id === parseInt(detailId)));
		// 	setShow(true);
		// } else {
		// 	setShow(false)
		// }
	}, [])

      // buscar con find el detalle

    // getObj.then(resp => setObject(resp.find(film => film.id === detailId)))
    

    useEffect(() => {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 2000);
    },[])
    
    

  return (
    <>
    {/* {show ? <div><h1>Cargando..</h1></div> : <DetailItemView object={object} />} */}
    </>
  )
}

export default DetailComponent