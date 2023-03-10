import { useState, useEffect } from "react";
import MapComponent from "./MapComponent/MapComponent";
import CatalogueFilter from "../CatalogueFilter/CatalogueFilter";
import "./Main.css";
import { useParams } from "react-router-dom";
import api from "../../api";
import type { CallFetchCategory } from "../../interfaces/CallFetch";
import { CallFetch } from "../../interfaces/CallFetch";

const INTIAL_STATE: CallFetch[] = [
  {
    id: 0,
    userId: 0,
    price: 0,
    title: "",
    category: "female",
    stock: 0,
    img: "",
    quantity: 0,
  },
];

interface Props {
  data: CallFetch[];
  filter?: CallFetchCategory;
}

const MapComponentWithData = ({ data, filter }: Props) => {
  const filteredData = filter
    ? data.filter((item) => item.category === filter)
    : data;

  return <MapComponent result={filteredData} />;
};

const Main = () => {
  const [result, setResult] = useState<CallFetch[]>(INTIAL_STATE);

  const [search, setSearch] = useState<CallFetch[]>([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    api.then((res) => setResult(res));
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtrado = result.filter(
        (elemento) => elemento.category === categoryId
      );

      setSearch(filtrado);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [categoryId]);

  return (
    <>
      <div className="view">
        <CatalogueFilter />
        {show ? (
          <MapComponentWithData
            data={search}
            filter={categoryId ? (categoryId as CallFetchCategory) : undefined}
          />
        ) : (
          <MapComponentWithData data={result} />
        )}
      </div>
    </>
  );
};

export default Main;
