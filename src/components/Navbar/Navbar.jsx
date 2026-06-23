import React, { useState } from 'react'
import NavLink from "./NavLinks"
import { ChevronRight, Menu, X } from 'lucide-react';
import NAVIMG from "../../assets/nav.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white w-full relative z-40'>
      {/* Main Container */}
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between'>
        
        <div className='hidden md:flex items-center gap-4 lg:gap-6'>
          <ul className='flex items-center gap-4 lg:gap-5'>
            {NavLink.map((link, idx) => (
              <li key={idx}>
                <a 
                  className='font-medium text-[12px] text-gray-700 hover:text-black hover:underline transition-colors duration-200 whitespace-nowrap' 
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <ChevronRight size={16} className='text-gray-400 flex-shrink-0' />
        </div>

        <div className='hidden md:block flex-shrink-0'>
          <img className='w-48 lg:w-56 h-auto object-contain' src={NAVIMG} alt="Nav Img" />
        </div>

        <div className='flex md:hidden items-center justify-between w-full'>
          {/* Logo on Left for Mobile */}
          <img className='w-32 h-auto object-contain' src={NAVIMG} alt="Nav Img" />
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors'
            aria-label='Toggle Navigation'
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-14 left-0 w-full bg-white border-b border-gray-200 md:hidden shadow-lg z-50 animate-fadeIn'>
          <ul className='flex flex-col px-6 py-3 gap-3.5'>
            {NavLink.map((link, idx) => (
              <li key={idx} className='border-b border-gray-50 pb-2 last:border-none last:pb-0'>
                <a 
                  className='block font-medium text-base text-gray-800 hover:text-black transition-colors' 
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar