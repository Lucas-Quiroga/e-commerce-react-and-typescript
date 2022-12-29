import React from 'react'

const CatalogueFilter = () => {
  return (
    <div>
        <div className="productos">
            <h3>Tipo de producto</h3>
            <input type="checkbox" /> Buzos
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