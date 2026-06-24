import React from 'react';
import { HelpCircle, Mail } from 'lucide-react';

const Footer = () => {
  // Navigation data based on the layout in Screenshot (414).jpg and image_79f669.jpg
  const footerLinks = [
    {
      title: "Electronics",
      links: ["Mobiles", "Tablets", "Laptops", "Desktops", "Wearables", "Headphones", "Camera, Photo & Video", "Televisions"]
    },
    {
      title: "Fashion",
      links: ["Women's Fashion", "Men's Fashion", "Kids' Fashion", "Fragrances", "Watches", "Jewellery", "Eyewear", "Footwear"]
    },
    {
      title: "Home and Kitchen",
      links: ["Large Appliances", "Small Appliances", "Bedroom Furniture", "Storage", "Cookware", "Furniture", "Home Fragrance", "Drinkware"]
    },
    {
      title: "Beauty",
      links: ["Fragrance", "Skincare", "Haircare", "Personal Care", "Makeup", "Makeup Tools", "Men's Grooming", "Health Care Essentials"]
    },
    {
      title: "Baby & Toys",
      links: ["Nursing & Feeding", "Diapering", "Baby Transport", "Baby & Toddler Toys", "Tricycles & Scooters", "Board Games & Cards", "Baby Food"]
    },
    {
      title: "Top Brands",
      links: ["Apple", "Samsung", "Xiaomi", "Sony", "Adidas", "Philips", "Lattafa", "Huawei", "Geepas"]
    },
    {
      title: "Discover Now",
      links: ["Blogs", "Brand Glossary", "Trending Searches", "noon Affiliate Program", "Dubai Traders Program", "noon Grocery", "noon Food", "noon Minutes", "noon Supermall"]
    },
    {
      title: "Popular",
      links: ["iPhone 17 Series", "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max", "FIFA Football World Cup", "Brazil Football Jerseys", "Argentina Football Jerseys", "Spain Football Jerseys", "Germany Football Jerseys", "Portugal Football Jerseys", "Egypt Football Jerseys", "Morocco Football Jerseys"]
    },
    {
      title: "GCC",
      links: ["noon Kuwait", "noon Bahrain", "noon Oman", "noon Qatar"]
    }
  ];

  const popularSearches = [
    "Body Mist", "Labubu", "S25 Ultra", "Samsung S25", "Dyson", "Sunscreen", "Vitamin C Serum", "Self Tanner", 
    "Travel Luggage", "Aldo Bags", "Cosmetics", "Razor", "iPhone 17 Price", "iPhone 17 Pro", "Tablet", "iPhone 17 Air", 
    "iPhone 17 Features", "iPhone 17 Pro Max", "iPhone 17 Series", "Barbie", "Lattafa Perfume", "Rasasi Perfume", 
    "Versace Perfume", "Chanel Perfume", "Dior Perfume", "Nothing Phone", "Best Laptops", "Sunglasses Men", 
    "Flip flops", "Birkenstock", "Handbags", "Sunglasses Women", "LG Fridge", "Samsung Fridge", "Whirlpool Fridge", 
    "Ninja Air Fryer", "Philips Air Fryer", "Nutricook Air Fryer", "Apple iMac", "Mac Studio", "Squishmallows", 
    "Monopoly", "Lego", "MacBook Air", "MacBook Pro", "Samsung S24", "iPhone 14", "iPhone 15 Pro", "iPhone 16", 
    "Samsung S22 Ultra", "iPhone 14 Pro Max", "Samsung S23 Ultra", "iPhone 16 Plus", "iPhone 15 Pro Max", "iPhone 16 Pro"
  ];

  return (
    <footer className="w-full  bg-[#f7f9fa] text-[#38ae0] font-poppins border-t border-gray-200">
      
      {/* SECTION 1: SEO Information & Paragraphs (Seen in Screenshot (413).jpg) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 border-b border-gray-200 text-xs text-gray-500 leading-relaxed">
        <h2 className="font-bold text-gray-800 text-sm mb-2">Superior online shopping in the UAE</h2>
        <p className="mb-4">
          As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you're shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports and health essentials, beauty products, or groceries, we have millions of products in the noon UAE store... <span className="text-blue-600 cursor-pointer font-semibold">Read More</span>
        </p>

        <h2 className="font-bold text-gray-800 text-sm mb-2">Shop the best products & brands at noon UAE</h2>
        <p className="mb-4">
          You'll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable devices, headphones (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of cameras, televisions, video game consoles... <span className="text-blue-600 cursor-pointer font-semibold">Read More</span>
        </p>

        <h2 className="font-bold text-gray-800 text-sm mb-2">Hassle-free UAE online shopping</h2>
        <p className="mb-6">
          When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better... <span className="text-blue-600 cursor-pointer font-semibold">Read More</span>
        </p>

        {/* Popular Searches Tags Block */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-3">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((tag, idx) => (
              <span key={idx} className="bg-white border border-gray-200 px-2 py-1 text-[11px] text-gray-600 rounded cursor-pointer hover:border-gray-400 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Help Banner (Seen in Screenshot (414).jpg) */}
      <div className="bg-[#eff2f4] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-bold text-gray-800 text-base">We're Always Here To Help</h3>
            <p className="text-xs text-gray-500">Reach out to us through any of these support channels</p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-gray-700">
            <a href="https://help.noon.com" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 group-hover:border-gray-300">
                <HelpCircle size={18} className="text-gray-500" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Help Center</span>
                <span className="font-bold text-gray-800 text-sm group-hover:underline">help.noon.com</span>
              </div>
            </a>
            <a href="mailto:care@noon.com" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 group-hover:border-gray-300">
                <Mail size={18} className="text-gray-500" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Email Support</span>
                <span className="font-bold text-gray-800 text-sm group-hover:underline">care@noon.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 3: Multi-column Navigation Links (Seen in Screenshot (414).jpg & image_79f669.jpg) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 text-xs">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 className="font-bold text-gray-800 text-[13px] mb-1 whitespace-nowrap">{section.title}</h4>
              <ul className="flex flex-col gap-1.5 text-gray-500">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="hover:text-blue-600 hover:underline cursor-pointer transition-colors break-words">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: App Download & Social Badges (Seen in image_79f669.jpg) */}
      <div className="border-t border-gray-200 bg-[#f7f9fa]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* App Stores Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Shop On The Go</span>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="Download App Store" className="h-9" />
              </a>
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="Download Google Play" className="h-9" />
              </a>
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img src="https://f.nooncdn.com/s/app/com/noon/images/Huawei-icon.png" alt="Explore AppGallery" className="h-9" />
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Connect With Us</span>
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center text-sm transition-colors shadow-sm">f</a>
              <a href="#" className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center text-sm transition-colors shadow-sm">X</a>
              <a href="#" className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center text-sm transition-colors shadow-sm">📷</a>
              <a href="#" className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center text-sm transition-colors shadow-sm">in</a>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 5: Legal Information & Payment Gateways (Seen in image_79f669.jpg) */}
      <div className="bg-[#eff2f4] py-5 border-t border-gray-200 text-xs text-gray-500">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          
          {/* Copyright Info */}
          <div>
            <span>© 2026 noon. All Rights Reserved</span>
          </div>

          {/* Payment Gateways Emblems */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            <span className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-orange-600 shadow-sm">MasterCard</span>
            <span className="px-2 py-0.5 bg-blue-800 border border-transparent rounded text-[10px] font-bold text-white shadow-sm">VISA</span>
            <span className="px-2 py-0.5 bg-green-400 border border-transparent rounded text-[10px] font-bold text-white shadow-sm">tabby</span>
            <span className="px-2 py-0.5 bg-purple-300 border border-transparent rounded text-[10px] font-bold text-purple-900 shadow-sm">tamara</span>
            <span className="px-2 py-0.5 bg-blue-500 border border-transparent rounded text-[10px] font-bold text-white shadow-sm">AMEX</span>
            <span className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-green-600 shadow-sm">CASH</span>
          </div>

          {/* Corporate Directory / Policies Link Row */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-600">
            <a href="#" className="hover:underline hover:text-blue-600">Careers</a>
            <a href="#" className="hover:underline hover:text-blue-600">Warranty Policy</a>
            <a href="#" className="hover:underline hover:text-blue-600">Sell with us</a>
            <a href="#" className="hover:underline hover:text-blue-600">Terms of Use</a>
            <a href="#" className="hover:underline hover:text-blue-600">Terms of Sale</a>
            <a href="#" className="hover:underline hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-blue-600">Consumer Rights</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;