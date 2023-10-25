
import { Routes, Route } from 'react-router-dom';

import Sidebar from "./SideBarUserDashboard";
import Dashboard from "./DashBoard";
import Wishlist from "./Wishlist";
import Cart from './Cart';
import Order from './Order.jsx';
import Contact from './Contact.jsx'
import React,{ useState } from "react";
import Return from './Return.jsx';
import './index.css'

// ... other route components
import {useSelector } from 'react-redux';
function UserRoutes  () {
   // eslint-disable-next-line
  const [isSidebar, setIsSidebar] = useState(true);
   // eslint-disable-next-line
  const user = useSelector((state) => state.user);
   // eslint-disable-next-line
  const token = sessionStorage.getItem("token");


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
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/returns" element={<Return/>}/>
    </Routes>
    </main>
        </div>
  );
};

export default UserRoutes;
