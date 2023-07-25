
import { Routes, Route } from 'react-router-dom';
// import Topbar from "./scenes/global/Topbar";
import Sidebar from "./SideBarUserDashboard";
import Dashboard from "./DashBoard";
import Wishlist from "./Wishlist";
import Cart from './Cart';
import Order from './Order.jsx'
// import Team from "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/Faq";
// import Calendar from "./scenes/Calendar";
// import Users from './scenes/Users'
import React,{ useState } from "react";
import './index.css'
// import { Navigate } from 'react-router-dom';
// ... other route components
import {useSelector } from 'react-redux';
// import Orders from './scenes/Orders';
// import ProductInventory from './scenes/ProductInventory';
function UserRoutes  () {
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");
  console.log("user from index.js:",JSON.stringify(user,token))
  // if (!user || !token) {
  //   // If user or token is missing, redirect to login page or desired route
  //   return <Navigate to="/login" />;
  // }

  return (
    
    <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Order/>}/>
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </main>
        </div>
  );
};

export default UserRoutes;
