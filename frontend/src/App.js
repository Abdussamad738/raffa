import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {  Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import ShopByCategory from './components/ShopByCategory';
import CategoryProducts from './components/CategoryProducts';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import BulkOrderPage from './components/BulkOrderPage';
import BulkOrderDetails from './components/BulkOrderDetails';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/Contact';
import UserDashboard from './components/UserDashboard';
import Deals from './components/Deals';
import Cart from './components/Cart'
import Header from './components/Header';
import OrderHistory from './components/OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/SearchResults';
import Login from './components/Login';
import Register from './components/Register'
import {  Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import ProtectedRoute from './components/ProtectedRoute';
import { useIsAuthenticated } from 'react-auth-kit';
// function AuthenticatedRoute({ element: Component, ...rest }) {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   if (!isAuthenticated()) {
//     // Redirect to login page if not authenticated
//     navigate("/login");
//     return null;
//   }

//   // Render the component if authenticated
//   return <Route {...rest} element={<Component />} />;
// }

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const isAuthenticated = useIsAuthenticated();
  // const navigate = useNavigate();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  // const ProtectedOrderHistory = () => {
  //   if (!isAuthenticated()) {
  //     navigate('/login');
  //     return null;
  //   }

  //   return <OrderHistory />;
  // };
  
  return (
    
    
    <BrowserRouter>
      <Header onSearch={handleSearch}/>
     

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<ShopByCategory />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
        <Route path="/category/:categoryId" element={<CategoryProducts/>} />
        <Route path="/category" element={<CategoryProducts/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/confirmation" element={<OrderConfirmation/>} />
        <Route path="/bulkorder" element={<BulkOrderPage/>} />
        <Route path="/bulkorder/:orderId" element={<BulkOrderDetails/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/deals" element={<Deals/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route
          path={'/orderhistory'}
          element={
            <RequireAuth loginPath={'/login'}>
              <OrderHistory />
            </RequireAuth>
          }
        />
        {/* <Route
          path='/user-dashboard'
          element={
            <RequireAuth loginPath={'/login'}>
              <UserDashboard />
            </RequireAuth>
          }
        /> */}

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
