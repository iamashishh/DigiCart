import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Productdeatils from './components/Productdeatils'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div className="bg-[#FFFEFEFF]  px-4 lg:px-8  ">
      <Toaster position="top-center" reverseOrder={false} />
      
      <Navbar/>
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Productdeatils/>} />
        <Route path='/cart' element={<Cart/>} />

        
      </Routes>
    </div>
    
  )


}
 
export default App