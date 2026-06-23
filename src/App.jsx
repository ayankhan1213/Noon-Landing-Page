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
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default App