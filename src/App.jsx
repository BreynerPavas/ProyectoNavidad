import { useState } from 'react'
import './App.css'
import { ProductProvider } from './context/ProductContext/ProductState'
import Products from './components/Products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ProductByID from './components/ProductByID/ProductByID'
import FormRegister from './components/FormRegister/FormRegister'
import FormLogin from './components/FormLogin/FormLogin'

function App() {

  return (
    <>
    <div className='container'>
      <BrowserRouter>
      <ProductProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />       
        <Route path='/Products' element={<Products/>} />    
        <Route path='/ProductByID/id/:id' element={<ProductByID/>} />    
        <Route path='/RegisterUser' element={<FormRegister/>}/>
        <Route path='/LoginUser' element={<FormLogin/>}/>

      </Routes>
      <Footer/>
      </ProductProvider>
    </BrowserRouter>
    </div>


      
        
      
    </>
  )
}

export default App
