import React from "react";
import ItemsComponent from "./ItemsComponent/ItemsComponent";
import ItemsComponentFilter from "./ItemsComponent/ItemsComponentFilter";

type CallFetchCategory = "male" | "female";

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
}

const MapComponentFilter = ({ search }: { search: CallFetch[] }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
          justifyContent: "center",
        }}
      >
        {search.map((resp) => (
          <ItemsComponentFilter key={resp.id} respuesta={resp} />
        ))}
      </div>
    </>
  );
};

export default MapComponentFilter;
