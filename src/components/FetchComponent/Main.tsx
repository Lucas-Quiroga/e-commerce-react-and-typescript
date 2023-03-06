import { useState, useEffect } from "react";
import MapComponent from "./MapComponent/MapComponent";
import CatalogueFilter from "../CatalogueFilter/CatalogueFilter";
import "./Main.css";
import { useParams } from "react-router-dom";
import MapComponentFilter from "./MapComponent/MapComponentFilter";
import api from "../../api";

type CallFetchCategory = "male" | "female";

const INTIAL_STATE: CallFetch[] = [
  {
    id: 0,
    userId: 0,
    price: 0,
    title: "",
    category: "female",
    stock: 0,
  },
];

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
}

const Main = () => {
  const [result, setResult] = useState<CallFetch[]>(INTIAL_STATE);

  const [search, setSearch] = useState<CallFetch[]>([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  const { categoryId } = useParams();

  const URL = "https://apimocha.com/infoapi/posts";

  //logica para que antes de que guarde todos los datos primero los filtre
  // fetch(api)
  // 	.then (response => response.json())
  // 	// cambie el slice del setResult por el setSearch
  // 	.then (res => setResult(res))

  useEffect(() => {
    api.then((res) => setResult(res));
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtrado = result.filter(
        (elemento) => elemento.category === categoryId
      );
      //podria cambiarse a setResult pero solucionar con un if
      setSearch(filtrado);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [categoryId]);

  return (
    <>
      {show ? (
        <div className="view">
          <CatalogueFilter />
          <MapComponentFilter search={search} />
        </div>
      ) : (
        <div className="view">
          <CatalogueFilter />
          <MapComponent result={result} />
        </div>
      )}
    </>
  );
};

export default Main;
