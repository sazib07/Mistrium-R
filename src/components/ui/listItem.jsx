import React from 'react'

const listItem = ({item,className}) => {
  return (
    <li className={className}>{item.name} </li>
  )
}


export default listItem