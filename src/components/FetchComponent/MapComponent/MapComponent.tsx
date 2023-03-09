import React from "react";
import ItemsComponent from "./ItemsComponent/ItemsComponent";
import type { CallFetchCategory } from "../../../interfaces/CallFetch";
import { CallFetch } from "../../../interfaces/CallFetch";

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
