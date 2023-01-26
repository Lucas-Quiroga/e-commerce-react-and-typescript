import React from 'react'

type CallFetchCategory = "male" | "female";

interface CallFetch{
  id: number,
  userId: number,
  price: number,
  title: string,
  category: CallFetchCategory
}

const DetailItemView = ({object}:{object:CallFetch}) => {
  return (
    <>
    <h1>{object.title}</h1>
    </>
  )
}

export default DetailItemView