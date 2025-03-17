import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Productdeatils from './components/Productdeatils'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
const App = () => {
  return (
    <div className="bg-[#FFFEFEFF]  px-10  ">
      
      {/* <Navbar/> */}
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