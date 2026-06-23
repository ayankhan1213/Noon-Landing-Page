import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='text-sm border-1 py-1 px-3 font-semibold'>{title}</button>
    </div>
  )
}

export default Button