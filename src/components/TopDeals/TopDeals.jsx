import React, { useState, useEffect } from 'react';
import topDeals from './TopDealsData'; // Sahi array name import kiya
import { ChevronLeft, ChevronRight, Heart, Star, Plus } from 'lucide-react';

const Tech = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1); // Mobile layout
            } else if (window.innerWidth < 768) {
                setVisibleCards(2);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(3);
            } else if (window.innerWidth < 1280) {
                setVisibleCards(5);
            } else {
                setVisibleCards(6); // Desktop view
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // topDeals array ke mutaabik length calculate ki
    const maxIndex = topDeals.length - visibleCards;

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setCurrentIndex(0); // Smooth snap loop to start
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex(maxIndex); // Loop to last view frame
        }
    };

    return (
        <div className="w-full bg-white py-6 px-4 select-none font-sans overflow-hidden">
            {/* Carousel Header Section */}
            <div className="w-full flex items-center justify-between mb-5">
                <h2 className="text-base sm:text-xl font-bold text-gray-900 tracking-tight">
                    Top deals in home
                </h2>
                <button className="border border-gray-300 text-gray-800 text-[10px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-gray-50 transition-colors uppercase whitespace-nowrap">
                    View All
                </button>
            </div>

            {/* Carousel Track Boundary Wrap */}
            <div className="w-full relative px-1">

                {/* Left Navigation Bullet Control */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-[40%] -translate-y-1/2 bg-white border border-gray-200 shadow-md w-9 h-9 rounded-full flex items-center justify-center text-gray-600 z-30 hover:bg-gray-50 transition-all active:scale-90"
                >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Main Viewport Window Container */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                        }}
                    >
                        {topDeals.map((product) => (
                            <div
                                key={product.id}
                                style={{
                                    minWidth: `${100 / visibleCards}%`,
                                    maxWidth: `${100 / visibleCards}%`,
                                }}
                                className="px-2 w-full flex-shrink-0"
                            >
                                {/* Premium Card Component Grid block */}
                                <div className="w-full flex flex-col bg-white border border-gray-100/90 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 p-3.5 relative cursor-pointer rounded-xl h-full">

                                    {/* Action Header Line */}
                                    <div className="w-full flex justify-between items-center mb-3 h-5">
                                        {product.isBestSeller ? (
                                            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-sm tracking-wide">
                                                Best Seller
                                            </span>
                                        ) : (
                                            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-sm tracking-wide">
                                                Selling out Fast
                                            </span>
                                        )}
                                        <button className="text-gray-400 hover:text-red-500 transition-colors p-0.5">
                                            <Heart className="w-4.5 h-4.5 stroke-[2]" />
                                        </button>
                                    </div>

                                    {/* Image Canvas Box */}
                                    <div className="w-full aspect-square flex items-center justify-center p-1 mb-4 relative bg-gray-50/50 rounded-xl overflow-hidden">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                                            />
                                        ) : (
                                            <div className="text-[11px] text-gray-400 font-medium italic select-none text-center p-2">
                                                [Drop Home Asset]
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Title specs */}
                                    <h3 className="text-[13px] text-gray-800 line-clamp-2 min-h-[36px] font-normal leading-snug tracking-tight mb-2">
                                        {product.title}
                                    </h3>

                                    {/* Rating metrics badge row */}
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <div className="flex items-center bg-emerald-700 text-white font-bold text-[10px] px-1 py-0.5 rounded-sm gap-0.5">
                                            <span>{product.rating}</span>
                                            <span className="text-[8px]">★</span>
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-medium">({product.reviewsCount})</span>
                                    </div>

                                    {/* Price blocks distribution matrix */}
                                    <div className="flex flex-col mb-3 mt-auto">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[11px] font-bold text-gray-900 tracking-tight">AED</span>
                                            <span className="text-[19px] font-black text-gray-900 tracking-tight leading-none">{product.currentPrice}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[11px] mt-0.5">
                                            <span className="text-gray-400 line-through">AED {product.oldPrice}</span>
                                            <span className="text-emerald-600 font-bold">{product.discount} Off</span>
                                        </div>
                                    </div>

                                    {/* Shipping Delivery Express status */}
                                    <div className="h-6 flex items-center">
                                        {product.tagExpress ? (
                                            <div className="bg-[#feee00] text-gray-900 font-black text-[9.5px] uppercase px-2 py-0.5 rounded-sm flex items-center gap-1.5 tracking-wider">
                                                <span className="italic">express</span>
                                                <span className="font-semibold text-gray-800 normal-case text-[8.5px] border-l border-gray-400/60 pl-1.5">Get in {product.deliveryTime}</span>
                                            </div>
                                        ) : (
                                            <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                                                <span className="text-gray-400 font-bold tracking-wide">express</span>
                                                <span className="text-gray-600">{product.deliveryTime}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quick action card trigger */}
                                    <button className="absolute bottom-14 right-5 w-7 h-7 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-transform active:scale-90 z-10">
                                        <Plus className="w-4 h-4 stroke-[2.5]" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Navigation Bullet Control */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-[40%] -translate-y-1/2 bg-white border border-gray-200 shadow-md w-9 h-9 rounded-full flex items-center justify-center text-gray-600 z-30 hover:bg-gray-50 transition-all active:scale-90"
                >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>

            </div>
        </div>
    );
};

export default Tech;