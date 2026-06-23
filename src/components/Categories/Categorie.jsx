import React, { useRef } from 'react'
import Catdata from './CatData'
import CatCard from './CatCard'

const Categorie = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative flex items-center group">
      {/* Left button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-5 z-10 w-9 text-2xl h-9 rounded-full bg-white shadow-md flex items-center justify-center
                   hover:bg-gray-100 transition opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto m-5 ml-8 gap-4 scrollbar-hide scroll-smooth"
      >
        {Catdata.map((item, idx) => {
          return <CatCard key={idx} detail={item} />
        })}
      </div>

      {/* Right button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-5 text-2xl z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center
                   hover:bg-gray-100 transition opacity-0 group-hover:opacity-100"
      >
        ›
      </button>
    </div>
  )
}

export default Categorie