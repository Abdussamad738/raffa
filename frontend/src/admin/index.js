import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import FAQ from "./scenes/Faq";
import Calendar from "./scenes/Calendar";
import Users from './scenes/Users'
import { useState } from "react";
import './index.css'
import { Navigate } from 'react-router-dom';
// ... other route components
import { useDispatch,useSelector } from 'react-redux';
import Orders from './scenes/Orders';
import ProductInventory from './scenes/ProductInventory';
function AdminRoutes  () {
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");
  console.log("user from index.js:",JSON.stringify(user,token))
  if (!user || !token) {
    // If user or token is missing, redirect to login page or desired route
    return <Navigate to="/login" />;
  }

  return (
    
    <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
       <Route path="/pie" element={<Pie />} />
       <Route path="/line" element={<Line />} />
       <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/users" element={<Users />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<ProductInventory/>}/>
    </Routes>
    </main>
        </div>
  );
};

export default AdminRoutes;
