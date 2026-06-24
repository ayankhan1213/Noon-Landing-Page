import React from 'react';
import techRowsData from "./TopRatedData";

const Tech = () => {
  return (
    <div className="w-full bg-[#f7f7fa] py-6 px-3 sm:px-4 md:px-6 font-sans antialiased select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        
        {techRowsData.map((row) => (
          <div 
            key={row.id} 
            className="w-full bg-[#fff8e6] p-4 sm:p-5 rounded-2xl flex flex-col gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            {/* Header Section: Noon Original Style */}
            <div className="flex items-center justify-between w-full px-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#bf5e00] mr-1.5">{row.sectionTitle}</span>
                <span className="text-[#1a1c24]">{row.highlightText}</span>
              </h2>
              <button className="bg-[#1a1c24] hover:bg-black text-white text-[11px] sm:text-xs font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-colors duration-150 whitespace-nowrap shadow-sm">
                Shop deals
              </button>
            </div>

            {/* Responsive Grid: Mobile pe horizontal swipe aur Desktop pe proper 7 Columns */}
            <div className="w-full flex gap-3 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-5 lg:grid-cols-7 md:overflow-x-visible md:pb-0">
              {row.products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-[24px] sm:rounded-[28px] p-1 flex flex-col items-center justify-center min-w-[130px] sm:min-w-[150px] md:min-w-0 w-full border border-white hover:border-gray-200 transition-all duration-200 cursor-pointer group"
                >
                  {/* Image Container taking Full Width and Height of the Card */}
                  <div className="w-full aspect-[4/5] bg-[#f7f7fa] rounded-[20px] sm:rounded-[24px] flex items-center justify-center overflow-hidden relative">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt="Product Deal" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1 text-gray-300 font-bold select-none text-center p-4">
                        <span className="text-xl opacity-60">📷</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-wider">Full Banner</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Tech;