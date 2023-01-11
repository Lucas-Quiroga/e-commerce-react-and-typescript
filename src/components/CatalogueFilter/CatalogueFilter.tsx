import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const INTIAL_STATE = {
  checked: false
}

interface CallFetch{
	id: number,
	  userId: number,
	price: number,
	  title: string,
	  category: string
    categoryId: string
	}

const CatalogueFilter = ({result} : {result: CallFetch[]}) => {

  const [value, setValue] = useState(INTIAL_STATE);
  const [search, setSearch] = useState([])

  const {categoryId} = useParams<CallFetch["categoryId"]>();

  const handleValue = () => {
    setValue({checked: true})
    console.log("el estado es:" + JSON.stringify(value));
  }

//  console.log(result);

//  const filtrado = result.filter(elemento => elemento.category === categoryId)
 
//  setSearch(filtrado[]);
 





  // useEffect(() => {
  //   const getInfo = new Promise(resolve => {
  //     resolve(result.filter(categorY => categorY.category === categoryId))
  //   })
  //   if (categoryId) {
  //     getInfo.then(respuesta => setSearch(respuesta))
  //   }

  // }, [])



  

  return (
    <div>
        <div className="productos">
            <h3>Tipo de producto</h3>
            <input type="checkbox"  /> Buzos
            <input type="checkbox" /> Calzas
            <input type="checkbox" /> Camperas
            <input type="checkbox" /> Carteras
        </div>
        <div className="Genero">
            <h3>Género</h3>
            <NavLink to="/category/male">
              <input type="checkbox" id="male" name="male" value="male" />
            </NavLink><label > Male</label>

            <NavLink to="/category/female"><input type="checkbox" id="female" name="female" value="female" />
            </NavLink><label > Female</label>
    
        </div>

    </div>
  )
}

export default CatalogueFilter