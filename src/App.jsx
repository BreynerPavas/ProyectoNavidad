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
import { UserProvider } from './context/UserContext/UserState'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
    <div className='container'>
      <BrowserRouter>
      <ProductProvider>
        <UserProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />       
        <Route path='/Products' element={<Products/>} />    
        <Route path='/ProductByID/id/:id' element={<ProductByID/>} />    
        <Route path='/RegisterUser' element={<FormRegister/>}/>
        <Route path='/LoginUser' element={<FormLogin/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>
      <Footer/>
      </UserProvider>
      </ProductProvider>
    </BrowserRouter>
    </div>


      
        
      
    </>
  )
}

export default App
