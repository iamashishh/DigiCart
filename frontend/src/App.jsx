import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Productdeatils from './components/product/Productdeatils'
import Navbar from './components/layout/Navbar'
import Cart from './components/product/Cart'
import { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
import ProductCreate from './components/adminPanel/ProductCreate'
=======
import Profile from './components/user/Profile'
>>>>>>> c12aef0ce4dc3e6bb4652aa3361fb8dbc994e35d


const App = () => {
  return (
    <div className=" px-4 lg:px-8  ">
      <Toaster position="top-center" reverseOrder={false} />
      
      <Navbar/>
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Productdeatils/>} />
        <Route path='/cart' element={<Cart/>} />
<<<<<<< HEAD
        <Route path='/createproduct' element={<ProductCreate/>} />
=======
        <Route path='/profile' element={<Profile/>} />
>>>>>>> c12aef0ce4dc3e6bb4652aa3361fb8dbc994e35d

        
      </Routes>
    </div>
    
  )


}
 
export default App