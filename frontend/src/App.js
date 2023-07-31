
import './App.css';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import ShopByCategory from './components/ShopByCategory';
import CategoryProducts from './components/CategoryProducts';
import ProductDetails from './components/ProductDetails';
import OrderConfirmation from './components/OrderConfirmation';
import Deals from './components/Deals';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/SearchResults';
import Login from './components/Login';
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import AdminAuthCheck from './components/AdminAuthCheck';
import UserRoutes from './components/userDashboard/index.js';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  // const navigate = useNavigate();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
    
    <BrowserRouter>
      <Header onSearch={handleSearch}/>
      
      
     

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<ShopByCategory />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
        <Route path="/category/:categoryId" element={<CategoryProducts/>} />
        <Route path="/category" element={<CategoryProducts/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/confirmation" element={<OrderConfirmation/>} />
        <Route path="/deals" element={<Deals/>} />
<<<<<<< HEAD
=======
        <Route path='/footer' element={<Footer/>}/>

>>>>>>> a2430ca (sitemap)
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/admin/*" element={<AdminAuthCheck />} />
      </Routes>
      {/* <ShopByCategory/> */}
      
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
   
  );
}

export default App;
