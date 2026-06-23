import React from 'react'
import Header from "./components/Header/Header"
import Navbar from './components/Navbar/Navbar'
import Banner from "./components/Banners/Banner"
import Categorie from './components/Categories/Categorie'
import Section from "./components/Section/Section"
import Product from './components/Product.jsx/Product'
const App = () => {
  return (
    <>

      <Header />
      <Navbar />
      <Banner />
      <Categorie />
      <Section />
      <Product />
    </>
  )
}

export default App