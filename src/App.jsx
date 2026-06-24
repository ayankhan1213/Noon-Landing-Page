import React from 'react'
import Header from "./components/Header/Header"
import Navbar from './components/Navbar/Navbar'
import Banner from "./components/Banners/Banner"
import Categorie from './components/Categories/Categorie'
import Section from "./components/Section/Section"
import Product from './components/Product.jsx/Product'
import Seller from './components/Seller/Seller'
import Saving from "./components/Saving/Saving"
import Tech from './components/Tech/Tech'
import TopDeals  from './components/TopDeals/TopDeals'
import TopRated from "./components/TopRated/TopRated"
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>

      <Header />
      <Navbar />
      <Banner />
      <Categorie />
      <Section />
      <Product />
      <Seller />
      <Saving />
      <Tech />
      <TopDeals />
      <TopRated/>
      <Footer />
    </>
  )
}

export default App