import React, { useState } from 'react';
import SavingsData from "./SavingData"
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Saving = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const maxIndex = SavingsData.length - 4; 

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => Math.min(prev + 4, maxIndex));
        } else {
            setCurrentIndex(0); 
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => Math.max(prev - 4, 0));
        } else {
            setCurrentIndex(maxIndex); 
        }
    };

    return (
        <div className="w-full bg-[#f7f7fa] py-4 px-4 select-none">
            <div className="w-full bg-[#fbf5c4] rounded-sm p-4 relative">
                
                <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-4 pl-1">
                    Maximize your savings
                </h2>

                {currentIndex > 0 && (
                    <button 
                        onClick={handlePrev}
                        className="absolute left-2 top-[50%] -translate-y-1/2 bg-white border border-gray-200 shadow-md w-9 h-9 rounded-full flex items-center justify-center font-bold text-gray-700 z-20 hover:bg-gray-50 transition text-lg"
                    >
                         <ChevronLeft />
                    </button>
                )}

                {/* Carousel Window Frame */}
                <div className="w-full overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out gap-3"
                        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
                    >
                        {SavingsData.map((item) => (
                            <div 
                                key={item.id}
                                className="w-full min-w-[100%] sm:min-w-[49%] md:min-w-[32%] lg:min-w-[24.2%] flex flex-col cursor-pointer"
                            >
                                {/* Card Body Container - Pure Image with Full Card Width/Height */}
                                <div className="w-full aspect-[16/10] bg-transparent rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {item.image ? (
                                        <img 
                                            src={item.image} 
                                            alt="Savings Banner" 
                                            className="w-full h-full object-cover rounded-2xl" 
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[#e6dfb4]/50 border border-[#dfd8aa] rounded-2xl flex items-center justify-center text-xs text-gray-400 italic">
                                            [Drop Banner Image Here]
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Control Arrow */}
                {currentIndex < maxIndex && (
                    <button 
                        onClick={handleNext}
                        className="absolute right-2 top-[50%] -translate-y-1/2 bg-white border border-gray-200 shadow-md w-9 h-9 rounded-full flex items-center justify-center font-bold text-gray-700 z-20 hover:bg-gray-50 transition text-lg"
                    >
                        <ChevronRight />
                    </button>
                )}

                {/* Dot Bullet Pagination Indicators */}
                <div className="flex justify-center items-center gap-1.5 mt-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span 
                            key={index} 
                            onClick={() => setCurrentIndex(index * 4)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${Math.floor(currentIndex / 4) === index ? 'w-5 bg-gray-800' : 'w-1.5 bg-gray-400'}`}
                        ></span>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Saving;