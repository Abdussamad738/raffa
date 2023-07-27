
import './App.css';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import ShopByCategory from './components/ShopByCategory';
import CategoryProducts from './components/CategoryProducts';
import ProductDetails from './components/ProductDetails';
import OrderConfirmation from './components/OrderConfirmation';
import BulkOrderPage from './components/BulkOrderPage';
import BulkOrderDetails from './components/BulkOrderDetails';
import Contact from './components/Contact';
import Deals from './components/Deals';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/SearchResults';
import Login from './components/Login';
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import AdminAuthCheck from './components/AdminAuthCheck';
import UserRoutes from './components/userDashboard/index.js';
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
  // const navigate = useNavigate();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [theme, colorMode] = useMode();
  // const engine = new Styletron();
  // const ProtectedOrderHistory = () => {
  //   if (!isAuthenticated()) {
  //     navigate('/login');
  //     return null;
  //   }

  //   return <OrderHistory />;
  // };
  
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
        <Route path="/bulkorder" element={<BulkOrderPage/>} />
        <Route path="/bulkorder/:orderId" element={<BulkOrderDetails/>} />
        {/* <Route path="/admin" element={<AdminDashboard/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/deals" element={<Deals/>} />
        <Route path='/footer' element={<Footer/>}/>
        
        {/* <Route
          path={'/orderhistory'}
          element={
            <RequireAuth loginPath={'/login'}>
              <OrderHistory />
            </RequireAuth>
          }
        /> */}
        {/* <Route
          path='/user-dashboard'
          element={
            <RequireAuth loginPath={'/login'}>
              <UserDashboard />
            </RequireAuth>
          }
        /> */}

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
