import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Parent from './components/Parent'
import Profile from './components/Profile'
import State from './hooks/State'
import Form from './hooks/Form'
import Home from './pages/Home'
import About  from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        <Route path ="/service" element ={<Service/>}/>
        <Route path ="/service" element ={<Service/>}/>
        <Route path ="/products" element ={<Products/>}/>
        <Route path ="/products/:id" element ={<ProductDetails/>}/>
    </Routes>
      {/* <div> App </div> 
      <Parent/>
      <Profile name ="Yazhini" age={19} skills={["html","css","js","JAVA"]}/>
      <State/>
      <Form/> */}
    </>
  )
}

export default App
