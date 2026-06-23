import React from 'react'
import { reasonsToShop, megaDeals, inFocus } from './SectionData'

const ReasonsToShop = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-4 p-4">

      {/* LEFT: More reasons to shop */}
      <div className="flex flex-col gap-3 bg-gray-100 p-3">
        <h2 className="text-2xl font-bold text-gray-900">More reasons to shop</h2>
        <div className="grid grid-cols-2 gap-5">
          {reasonsToShop.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden h-[150px]">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE: Mega Deals */}
       <div className="flex flex-col gap-3 bg-yellow-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Mega Deals</h2>
          <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Shop deals
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {megaDeals.map((item) => (
            <div key={item.id} className="relative bg-white rounded-lg p-2.5 flex flex-col">
              <span className="absolute top-0 left-0 bg-black text-yellow-300 text-[10px] font-semibold px-2 py-1 rounded-tl-lg rounded-br-lg z-10">
                {item.tag}
              </span>
              <div className="relative flex items-center justify-center h-16 mt-5">
                <img src={item.image} alt={item.title} className="max-h-full max-w-[70%] object-contain" />
                <button className="absolute top-0 right-0 w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-sm font-bold hover:bg-gray-50">
                  +
                </button>
              </div>
              <p className="text-xs text-gray-800 mt-2 line-clamp-2 leading-snug min-h-[32px]">{item.title}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs text-gray-400 line-through">{item.oldPrice}</span>
                <span className="text-sm font-bold flex items-center gap-0.5">
                  <span className="text-xs">₯</span>{item.newPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: In focus */}
      <div className="flex flex-col gap-3 p-3 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">In focus</h2>
        <div className="grid grid-rows-2 gap-10">
          {inFocus.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden h-[160px]">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ReasonsToShop