import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Productdeatils from './components/Productdeatils'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className="bg-[#FFFEFEFF]   ">
      <Navbar/>
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Productdeatils/>} />
        
      </Routes>
    </div>
    
  )


}
 
export default App