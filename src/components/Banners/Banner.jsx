import React, { useState } from 'react'
import topBanner from "../../assets/topBanner.avif"
import leftBanner from "../../assets/leftBanner.avif"
import leftBannerTwo from "../../assets/leftBannerTwo.avif"
import leftBannerThree from "../../assets/leftBannerThree.gif"
import leftBannerFour from "../../assets/leftBannerFour.avif"
import leftBannerFive from "../../assets/leftBannerFive.avif"
import fashionRefresh from "../../assets/rightBanner.avif"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { id: 1, image: leftBanner, alt: 'Banner1' },
  { id: 2, image: leftBannerTwo, alt: 'Banner2' },
  { id: 3, image: leftBannerThree, alt: 'Banner3' },
  { id: 4, image: leftBannerFour, alt: 'Banner4' },
  { id: 5, image: leftBannerFive, alt: 'Banner5' },
]

const Banner = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='px-4 sm:px-6 flex flex-col'>

      {/* Top thin strip banner */}
      <div className='w-full h-10 sm:h-14 lg:h-16 bg-gray-200 overflow-hidden'>
        <img src={topBanner} className='w-full h-full object-cover' alt="Cashback Banner" />
      </div>

      {/* Bottom row */}
      <div className='flex flex-col sm:flex-row w-full gap-1'>

        {/* Left banner - carousel */}
        <div className='relative flex-[2] h-48 sm:h-46 lg:h-46 bg-gray-300 overflow-hidden group'>
          <img
            src={slides[current].image}
            className='w-full h-full object-cover object-center'
            alt={slides[current].alt}
          />

          <button
            onClick={prevSlide}
            className='absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 transition-colors'
            aria-label='Previous slide'
          >
            <ChevronLeft size={20} className='text-gray-800' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 transition-colors'
            aria-label='Next slide'
          >
            <ChevronRight size={20} className='text-gray-800' />
          </button>
        </div>

        <div className='flex-1 h-48 sm:h-46 lg:h-46 bg-gray-300 overflow-hidden'>
          <img
            src={fashionRefresh}
            className='w-full h-full object-cover object-top'
            alt='Fashion Refresh'
          />
        </div>

      </div>

    </div>
  )
}

export default Banner