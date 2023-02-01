import React from 'react'

type CallFetchCategory = "male" | "female";

type objectProps = {
  id?: number;
  userId?: number;
  price?: number;
  title?: string;
  category?: CallFetchCategory;
}

const DetailItemView = ({detailObject}: {detailObject: objectProps}) => {
  console.log(detailObject);
  
  return (
    <>
    {detailObject.title}
    {detailObject.category}
    </>
  )
}

export default DetailItemView