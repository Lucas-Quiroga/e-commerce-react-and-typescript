import React, {useState} from 'react'

const INTIAL_STATE = {
  checked: false
}

const CatalogueFilter = () => {

  const [value, setValue] = useState(INTIAL_STATE);

  const handleValue = () => {
    setValue({checked: true})
    console.log("el estado es:" + JSON.stringify(value));
    
  }

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
            <input type="checkbox" id="Hombre" name="Hombre" value="Hombre" />
            <label > Hombre</label>
            <input type="checkbox" id="Mujer" name="Mujer" value="Mujer" />
            <label > Mujer</label>
        </div>

    </div>
  )
}

export default CatalogueFilter