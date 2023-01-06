import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const INTIAL_STATE = {
  checked: false
}

const CatalogueFilter = () => {

  const [value, setValue] = useState(INTIAL_STATE);

  const handleValue = () => {
    setValue({checked: true})
    console.log("el estado es:" + JSON.stringify(value));
  }

  // function categoryWithSelect() {
  //   const {clothesId } = useParams();
  //   useEffect(() => {
      
  //     if(clothesId){

  //     }
    
  //     return () => {
  //       second
  //     }
  //   }, [third])
    
  // }

  return (
    <div>
        <div className="productos">
            <h3>Tipo de producto</h3>
            <input type="checkbox" onClick={handleValue} /> Buzos
            <input type="checkbox" /> Calzas
            <input type="checkbox" /> Camperas
            <input type="checkbox" /> Carteras
        </div>
        <div className="Genero">
            <h3>Género</h3>
            <NavLink to="/category/hombre"><input type="checkbox" id="Hombre" name="Hombre" value="Hombre" />
            </NavLink><label > Hombre</label>

            <NavLink to="/category/mujer"><input type="checkbox" id="Mujer" name="Mujer" value="Mujer" />
            </NavLink><label > Mujer</label>
    
        </div>

    </div>
  )
}

export default CatalogueFilter