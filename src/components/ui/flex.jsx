import React from 'react'

const flex = ({className,children}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default flex