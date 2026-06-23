import React from 'react';
import Button from "../Button/Button";
import ProductData from './ProductData';

const Product = () => {
    return (
        <div className="w-full bg-[#f7f7fa] py-4">
            {/* Header Section */}
            <div className='px-4 flex-col sm:flex-row flex justify-between items-center mb-4'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold text-[#1f2937] tracking-tight'>
                        Sports shoes & sneakers | Up to 70% off
                    </h2>
                </div>
                <div>
                    <Button title="VIEW ALL" />
                </div>
            </div>

            {/* Grid Container */}
            <div className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {ProductData.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white border border-gray-200 flex flex-col justify-between relative cursor-pointer hover:shadow-sm transition-shadow duration-150"
                    >
                        {/* Heart Icon (Positioned inside the image area) */}
                        <button className="absolute top-2 right-2 bg-white border border-gray-100 shadow-sm w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 z-10 transition text-sm">
                            🤍
                        </button>

                        {/* Product Image Wrapper - Absolute Full Width with Gray Box Background */}
                        <div className="w-full aspect-square bg-[#f8f9fa] border-b border-gray-100 flex items-center justify-center relative p-4">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="object-contain w-full h-full max-h-[140px]" 
                            />
                            
                            {/* Color Variants Badge for First Card */}
                            {item.id === 1 && (
                                <div className="absolute bottom-2 right-2 flex flex-col gap-0.5 items-center bg-white border border-gray-200 p-0.5 rounded shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span className="text-[9px] font-bold text-gray-500 px-0.5">2</span>
                                </div>
                            )}
                        </div>

                        {/* Product Content Info Section (With Padding) */}
                        <div className="flex-grow flex flex-col justify-between p-3 pt-1">
                            <div>
                                {/* Title Description */}
                                <h3 className="text-xs font-normal text-gray-700 line-clamp-2 leading-snug mb-1 min-h-[34px]">
                                    {item.title}
                                </h3>

                                {/* Star Ratings */}
                                {item.rating ? (
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="text-green-600 text-xs">★</span>
                                        <span className="text-gray-900 font-bold text-xs">{item.rating}</span>
                                        <span className="text-gray-400 text-[11px]">({item.reviewsCount})</span>
                                    </div>
                                ) : (
                                    <div className="min-h-[18px]"></div>
                                )}

                                {/* Price Layout */}
                                <div className="flex items-center gap-1 mt-1 flex-wrap">
                                    <span className="text-[11px] font-bold text-gray-900">AED</span>
                                    <span className="text-base font-extrabold text-gray-900 tracking-tight">{item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-gray-400 line-through text-[11px] ml-1">
                                            {item.originalPrice}
                                        </span>
                                    )}
                                    {item.discount && (
                                        <span className="text-[#388e3c] text-[11px] font-bold ml-1">
                                            {item.discount}
                                        </span>
                                    )}
                                </div>

                                {/* Status Tagline */}
                                {item.tag && (
                                    <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                                        {item.tag.includes('Selling') && <span>🔥</span>}
                                        <span className={item.tag.includes('Selling') ? 'text-orange-600 font-semibold' : ''}>
                                            {item.tag}
                                        </span>
                                    </p>
                                )}
                            </div>

                            {/* Bottom Badges */}
                            <div className="mt-3 min-h-[26px] flex items-center">
                                {item.badge === 'express' ? (
                                    item.deliveryTime === 'GET IN 47 MINS' ? (
                                        <div className="bg-[#1e3a8a] text-white flex items-center justify-between px-2 py-1 rounded text-[9px] font-bold tracking-wide w-full max-w-[115px]">
                                            <span>⚡ GET IN 47 MINS</span>
                                            <span className="text-[7px]">▶</span>
                                        </div>
                                    ) : (
                                        <div className="inline-flex items-center rounded overflow-hidden border border-gray-200">
                                            <span className="bg-[#feee00] text-black italic font-black text-[9px] px-1 py-0.5 uppercase tracking-tighter">
                                                express
                                            </span>
                                            <span className="bg-black text-white font-semibold text-[9px] px-1 py-0.5">
                                                Tomorrow
                                            </span>
                                        </div>
                                    )
                                ) : (
                                    <div className="inline-flex items-center gap-1 bg-[#f7f7fa] px-1.5 py-0.5 rounded border border-gray-200">
                                        <span className="text-gray-500 text-[9px] font-semibold uppercase tracking-wider">
                                            market
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product; 