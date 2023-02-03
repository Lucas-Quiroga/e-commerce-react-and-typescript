import React from 'react'
import { CallFetch } from '../../../interfaces/CallFetch';

type CallFetchCategory = "male" | "female";

const DetailItemView = ({detailObject}:{detailObject:CallFetch}) => {

  return (
    <>
    <div key={detailObject.id}>
    <h2>{detailObject.title}</h2>
    <ul>
      <li>{detailObject.price}</li>
      <li>user id:{detailObject.userId}</li>
    </ul>
    </div>
    
    </>
  )
}

export default DetailItemView