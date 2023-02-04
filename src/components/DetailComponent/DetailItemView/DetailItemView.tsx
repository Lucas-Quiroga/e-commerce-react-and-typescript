import React, { useState, useEffect } from "react";
import { CallFetch } from "../../../interfaces/CallFetch";

const DetailItemView = ({ detailObject }: { detailObject: CallFetch }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div key={detailObject.id}>
          <h2>{detailObject.title}</h2>
          <ul>
            <li>{detailObject.price}</li>
            <li>user id:{detailObject.userId}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DetailItemView;
