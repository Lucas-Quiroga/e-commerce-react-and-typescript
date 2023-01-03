import React from 'react'

interface ObjectProps {
    id: number;
    title: string;
    price: number;
    imgPic: string;
    stock: number;
    features: string;
}


const DetailItemView = ({object}:{object:ObjectProps}) => {
  return (
    <>
    <h1>{object.title}</h1>
    ¿<img src={object.imgPic} />
    </>
  )
}

export default DetailItemView