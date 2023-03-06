import React from "react";
import ItemsComponent from "./ItemsComponent/ItemsComponent";

type CallFetchCategory = "male" | "female";

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
}

const MapComponent = ({ result }: { result: CallFetch[] }) => {
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
        {result.map((resp) => (
          <ItemsComponent key={resp.id} respuesta={resp} />
        ))}
      </div>
    </>
  );
};

export default MapComponent;
