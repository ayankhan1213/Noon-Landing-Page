import React from 'react'
import Logo from './Logo'
import { MapPin, ChevronDown, Search } from 'lucide-react';
import HeaderLinks from './HeaderLinks';

const Header = () => {
  return (
    <div className='min-h-16 bg-[#F5E601] flex items-center w-full sticky top-0 z-50 shadow-sm'>
      <header className='flex px-4 sm:px-6 py-3 lg:py-0 gap-4 items-center w-full max-w-[1440px] mx-auto'>
        
        <div className='flex-shrink-0'>
          <Logo />
        </div>

        <div className='flex items-center gap-4 flex-1 justify-between lg:justify-start'>
          
          <div className='hidden md:block flex-shrink-0'>
            <a className='text-sm lg:text-md font-medium flex items-center gap-1 hover:bg-[#58574715] py-2 px-3 rounded-md transition-colors whitespace-nowrap' href="/">
              <MapPin size={18} />
              <span>Other</span> 
              <span className='font-extrabold'>·</span> 
              <span className='font-normal'>Dubai</span> 
              <ChevronDown size={16} />
            </a>
          </div>

          <div className='flex-1 max-w-full lg:max-w-3xl xl:max-w-4xl mx-0 sm:mx-2'>
            <div className='flex items-center bg-white rounded-md px-3 sm:px-4 py-2 shadow-sm border border-transparent focus-within:border-gray-400 transition-colors'>
              <Search className='w-5 h-5 text-gray-500 flex-shrink-0' strokeWidth={2.5} />
              <input
                type='text'
                placeholder='Search for "Shoes"'
                className='flex-1 bg-transparent outline-none border-none px-3 text-sm sm:text-[15px] text-gray-900 placeholder:text-gray-500 min-w-0'
              />
            </div>
          </div>

          <ul className='hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0'>
            {HeaderLinks.map((item) => (
              <li
                key={item.id}
                className='duration-100 hover:bg-[#58574715] py-2 rounded-md border-none px-2.5'
              >
                <a className='text-sm xl:text-md flex items-center gap-1.5 font-medium whitespace-nowrap' href={item.href}>
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </header>
    </div>
  )
}

export default Header;