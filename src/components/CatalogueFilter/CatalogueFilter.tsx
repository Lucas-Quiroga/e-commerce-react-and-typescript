import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { CallFetchCategory } from "../../interfaces/CallFetch";

const CatalogueFilter = () => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const handleValue = (data: CallFetchCategory) => {
    if (data === "male") {
      setMale(!male);
    }
    if (data === "female") {
      setFemale(!female);
    }
  };

  const handleMaleClick = () => {
    setMale(!male);
    if (female === true) {
      setFemale(!female);
    }
  };

  const handleFemaleClick = () => {
    setFemale(!female);
    if (male === true) {
      setMale(!male);
    }
  };

  return (
    <div style={{ padding: 15, minWidth: 100 }}>
      <form>
        <h3>Filtros</h3>
        <input type="checkbox" id="buzos" style={{cursor: 'pointer'}} />
        <label htmlFor="buzos" style={{userSelect: 'none', cursor: 'pointer'}}>Buzos</label>
        <br />
        <input type="checkbox" id="shoes" style={{cursor: 'pointer'}} />
        <label htmlFor="shoes" style={{userSelect: 'none', cursor: 'pointer'}}>Shoes</label>
        <br />
        <input type="checkbox" id="camperas" style={{cursor: 'pointer'}} />
        <label htmlFor="camperas" style={{userSelect: 'none', cursor: 'pointer'}}>Camperas</label>
        <br />
        <input type="checkbox" id="carteras" style={{cursor: 'pointer'}} />
        <label htmlFor="carteras" style={{userSelect: 'none', cursor: 'pointer'}}>Carteras</label>
        <br />
      </form>
      <div>
        <h3>Gender</h3>
        <NavLink
          to={male === false ? '/category/male' : '/category'}
          // to="/category/male"
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleMaleClick}
        >
          <input
            value="male"
            type="checkbox"
            id="male"
            name="male"
            style={{cursor: 'pointer'}}
            onChange={(e) => handleValue("male")}
            checked={male}
          />{" "}
          Male
        </NavLink>{" "}
        <br />
        <NavLink
          to={female === false ? '/category/female' : '/category'}
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleFemaleClick}
        >
          <input
            value="Female"
            type="checkbox"
            id="female"
            name="female"
            style={{cursor: 'pointer'}}
            onChange={(e) => handleValue("female")}
            checked={female}
          />{" "}
          Female
        </NavLink>
      </div>
    </div>
  );
};

export default CatalogueFilter;
