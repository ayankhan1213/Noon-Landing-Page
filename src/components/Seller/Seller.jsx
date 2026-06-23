import React from 'react';
import SellerData from './SellerData';

const Seller = () => {
    return (
        <div className="w-full bg-[#f7f7fa] py-6">
            {/* Header Title Grid Row */}
            <div className='px-4 flex justify-between items-center mb-4'>
                <h2 className='text-xl font-bold text-gray-900 tracking-tight'>
                    Bestsellers for you
                </h2>
                <button className="border border-gray-400 bg-white hover:bg-gray-50 text-xs font-bold px-4 py-2 rounded tracking-wide transition">
                    VIEW ALL
                </button>
            </div>

            {/* Same to Same Exact Noon Layout Grid */}
            <div className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {SellerData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-100 flex flex-col justify-between relative cursor-pointer hover:shadow-md transition-shadow duration-150 rounded"
                    >
                        {/* Top Left "Best Seller" Badge */}
                        <span className="absolute top-2 left-2 bg-[#005e54] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm z-10">
                            Best Seller
                        </span>

                        {/* Top Right Heart Icon */}
                        <button className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 z-10 transition text-sm border border-gray-100">
                            🤍
                        </button>

                        {/* Product Image Section - Pure Edge-to-Edge Container */}
                        <div className="w-full aspect-square bg-[#f8f9fa] border-b border-gray-100 flex items-center justify-center relative p-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-contain w-full h-full max-h-[140px]"
                            />

                            {/* Absolute bottom-right Quick Plus Action Button */}
                            <button className="absolute bottom-2 right-2 bg-white border border-gray-200 shadow-sm w-6 h-6 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm hover:bg-gray-50 transition">
                                +
                            </button>
                        </div>

                        {/* Text and Pricing Body Content Section */}
                        <div className="flex-grow flex flex-col justify-between p-3 pt-2">
                            <div>
                                {/* Product Title */}
                                <h3 className="text-xs font-normal text-gray-800 line-clamp-2 leading-snug mb-1 min-h-[34px]">
                                    {item.title}
                                </h3>

                                {/* Ratings Section */}
                                <div className="flex items-center gap-1 mb-1.5">
                                    <span className="text-green-600 text-xs">★</span>
                                    <span className="text-gray-900 font-bold text-xs">{item.rating}</span>
                                    <span className="text-gray-400 text-[10px]">({item.reviewsCount})</span>
                                </div>

                                {/* Price Structure */}
                                <div className="flex items-baseline gap-0.5 flex-wrap">
                                    <span className="text-[10px] font-mono font-black text-gray-900">AED</span>
                                    <span className="text-base font-black text-gray-900 tracking-tight">{item.price}</span>
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

                                {/* Extra Meta Badges Row (e.g. SPF 50+, 100ml) */}
                                {item.extraMeta.length > 0 && (
                                    <div className="flex gap-1 mt-1 flex-wrap">
                                        {item.extraMeta.map((meta, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 border border-gray-200 text-[9px] px-1 py-0.5 rounded font-medium">
                                                {meta}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Red Low Price or Orange Fast Taglines */}
                                {item.tag && (
                                    <p className="text-[11px] mt-1 flex items-center gap-1 font-medium">
                                        {item.tagType === 'low-price' ? (
                                            <>
                                                <span className="text-red-500 text-xs">📉</span>
                                                <span className="text-red-500 font-semibold">{item.tag}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-orange-500">🔥</span>
                                                <span className="text-orange-600 font-semibold">{item.tag}</span>
                                            </>
                                        )}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seller;