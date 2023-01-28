import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailItemView from './DetailItemView/DetailItemView';
import api from '../../api';

type CallFetchCategory = "male" | "female";

const INTIAL_STATE:CallFetch[]= [{
	id: 0,
	userId: 0,
	price: 0,
	title: "",
	category: "female",
}]

interface CallFetch{
	  id: number,
	  userId: number,
	  price: number,
	  title: string,
	  category: CallFetchCategory
	}


const DetailComponent = () => {

  const [object, setObject] = useState<CallFetch[]>(INTIAL_STATE)
  const [detailObject, setDetailObject] = useState({})
  const [show, setShow] = useState(false);

  const {detailId} = useParams();


  useEffect(() => {
	  api.then(res => setObject(res)) 
    if (detailId) {
			const filtrado = object.find((elemento) => elemento.id === parseInt(detailId))

			// setDetailObject(filtrado);
			setShow(true);
		} else {
			setShow(false)
		}
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