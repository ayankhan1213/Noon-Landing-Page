import React from 'react'

const CatCard = ({ detail }) => {
  return (
    <div className="flex flex-col items-center justify-start flex-shrink-0 w-[100px]">
      <img
        className="w-[120px] h-[120px] rounded-sm object-cover"
        src={detail.image}
        alt={detail.name}
      />
      <p className="text-xs text-center mt-2 leading-tight whitespace-normal">
        {detail.name}
      </p>
    </div>
  )
}

export default CatCard