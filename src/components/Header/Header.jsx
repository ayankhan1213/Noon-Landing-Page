import React from 'react'
import Logo from './Logo'
import { MapPin, ChevronDown, Search } from 'lucide-react';
import HeaderLinks from './HeaderLinks';

const Header = () => {
  return (
    <div className='min-h-16 bg-[#F5E601] flex items-center w-full sticky top-0 z-50 shadow-sm'>
      <header className='flex flex-col md:flex-row px-4 sm:px-6 py-2.5 md:py-0 gap-2 md:gap-4 items-center w-full max-w-[1440px] mx-auto'>
        
        {/* Top Row for Mobile (Logo + Actions if needed) */}
        <div className='flex items-center justify-between w-full md:w-auto flex-shrink-0'>
          <div className='flex-shrink-0'>
            <Logo />
          </div>
          
          {/* Location Selector: Mobile pe text chota handle kiya aur layout flexible rakha */}
          <div className='block md:hidden flex-shrink-0 max-w-[180px]'>
            <a className='text-xs font-semibold flex items-center gap-1 hover:bg-[#58574715] py-1.5 px-2 rounded-md transition-colors whitespace-nowrap overflow-hidden' href="/">
              <MapPin size={14} className="flex-shrink-0" />
              <span className='truncate'>Dubai</span> 
              <ChevronDown size={12} className="flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Search & Links Wrapper */}
        <div className='flex items-center gap-3 flex-1 w-full justify-between lg:justify-start min-w-0'>
          
          {/* Location Selector for Desktop Only */}
          <div className='hidden md:block flex-shrink-0'>
            <a className='text-sm lg:text-md font-medium flex items-center gap-1 hover:bg-[#58574715] py-2 px-3 rounded-md transition-colors whitespace-nowrap' href="/">
              <MapPin size={18} />
              <span>Other</span> 
              <span className='font-extrabold'>·</span> 
              <span className='font-normal'>Dubai</span> 
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Search Input Bar - Now Fully Shielded with min-w-0 and proper padding for Mobile */}
          <div className='flex-1 max-w-full lg:max-w-3xl xl:max-w-4xl min-w-0 w-full'>
            <div className='flex items-center bg-white rounded-md px-3 py-2 shadow-sm border border-transparent focus-within:border-gray-400 transition-colors w-full'>
              <Search className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0' strokeWidth={2.5} />
              <input
                type='text'
                placeholder='Search for products...'
                className='flex-1 bg-transparent outline-none border-none pl-2 pr-1 text-xs sm:text-sm text-gray-900 placeholder:text-gray-500 min-w-0 w-full'
              />
            </div>
          </div>

          {/* Desktop Links */}
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