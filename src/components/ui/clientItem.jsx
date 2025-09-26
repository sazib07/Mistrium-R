import React from 'react'

const clientItem=({item,clientName})=>{
  return(
    <li className={clientName}>{item.name}</li>
  )
}
export default clientItem