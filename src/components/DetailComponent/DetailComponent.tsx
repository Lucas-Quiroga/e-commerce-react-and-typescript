import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailItemView from "./DetailItemView/DetailItemView";
import { CallFetch } from "../../interfaces/CallFetch";
import api from "../../api";

const DetailComponent = () => {
  const [objects, setObjects] = useState<CallFetch[]>([]);
  const [detailObject, setDetailObject] = useState<CallFetch>({
    id: 0,
    userId: 0,
    price: 0,
    title: "",
    category: "male",
    stock: 0,
  });

  // const [show, setShow] = useState(false);

  const { detailId } = useParams();

  useEffect(() => {
    api.then((e) => setObjects(e));
  }, []);

  useEffect(() => {
    if (detailId !== undefined) {
      const filtrado = objects.find((e) => e.id === parseInt(detailId));
      if (filtrado !== undefined) {
        setDetailObject(filtrado);
      }
    }
  }, [detailId, objects]);

  return (
    <>
      <DetailItemView detailObject={detailObject} />
    </>
  );
};

export default DetailComponent;
