import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
function App() {
  
  return (
    <div>
    
    <Router>
      <Header />
     

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<ShopByCategory/>} />
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
        <Route path="/orderhistory" element={<OrderHistory/>}/>

      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
