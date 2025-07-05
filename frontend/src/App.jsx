import React, { useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Routes ,Route } from 'react-router-dom'
import Productdeatils from './components/product/Productdeatils'
import Navbar from './components/layout/Navbar'
import Cart from './components/product/Cart'
import { Toaster } from 'react-hot-toast';
import ProductCreate from './components/adminPanel/ProductCreate'
import Profile from './pages/Profile'
import Orders from './pages/orders'
import Payment from './pages/Payment'
import ProtectedRoute from './utils/ProtectedRoute'
import AdminItemPage from './pages/AdminItemsPage'
import { useDispatch } from 'react-redux'
import { checkAuth } from './store/Reducers/AuthReducer'


const App = () => {

  const dispatch = useDispatch();

    useEffect(() => {

    dispatch(checkAuth()).then((data) => {
        console.log(data);
        
    })

  }, [dispatch])



  return (
    <div className=" max-sm:px-2 px-4 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Productdeatils/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/createproduct' element={
          <ProtectedRoute>
            <ProductCreate/>
            
          </ProtectedRoute>
          } />
          <Route path='/admin_items' element={
            <AdminItemPage/>
            } />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/myorders' element={<Orders/>} />
        <Route path='/payment' element={<Payment/>} />

        
      </Routes>
    </div>
    
  )


}
 
export default App