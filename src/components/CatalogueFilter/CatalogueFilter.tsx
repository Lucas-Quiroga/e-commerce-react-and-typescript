import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const INTIAL_STATE = {
  checked: true
}

type valueReferences = "male" | "female";

interface CallFetch{
	  id: number,
	  userId: number,
	  price: number,
	  title: string,
	  category: string

	}

const CatalogueFilter = () => {

  // const [value, setValue] = useState(INTIAL_STATE);
  const [male, setMale] = useState(INTIAL_STATE["checked"])
  const [female, setFemale] = useState(INTIAL_STATE["checked"])

  const {categoryId} = useParams();

  const handleValue = (data:valueReferences ) => {

    if(data==="male")
    {
      if (male === true) {
        console.log(data, "our value");
      }
      setMale(!male)
      console.log({female});
    }
    if(data==="female")
    {
      if (female === true) {
        console.log(data, "our value");
        setMale(!male)
        console.log(male);
        
      }
      setFemale(!female)
      console.log({male});
    }
  }

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
              <input type="checkbox" id="male" name="male"  onChange={(e)=>handleValue("male")} /> Male
            </NavLink>
              {/* los values tendrian que ir sin las comillas */}
            <NavLink to="/category/female"><input type="checkbox" id="female" name="female" onChange={(e)=>handleValue("female")} /> Female
            </NavLink>
    
        </div>

    </div>
  )
}

export default CatalogueFilter