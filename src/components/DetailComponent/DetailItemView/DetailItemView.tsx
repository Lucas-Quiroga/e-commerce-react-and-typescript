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
    <div>DetailItemView</div>
  )
}

export default DetailItemView