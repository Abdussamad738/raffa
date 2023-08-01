import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Invoices from "./scenes/Invoices";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Calendar from "./scenes/Calendar";
import { useState } from "react";
import './index.css'
import { Navigate } from 'react-router-dom';
// ... other route components
import { useSelector } from 'react-redux';
function AdminRoutes  () {
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");
  const LazyDashboard = lazy(() => import('./scenes/Dashboard'));
const LazyContacts = lazy(() => import('./scenes/Contacts'));
const LazyUsers = lazy(() => import('./scenes/Users'));
const LazyOrders = lazy(() => import('./scenes/Orders'));
const LazyProductInventory = lazy(() => import('./scenes/ProductInventory'));
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
    <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyDashboard /></Suspense>} />
    <Route path="/contacts" element={<Suspense fallback={<div>Loading...</div>}><LazyContacts /></Suspense>} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
       <Route path="/pie" element={<Pie />} />
       <Route path="/line" element={<Line />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/users" element={<Suspense fallback={<div>Loading...</div>}><LazyUsers /></Suspense>} />
          <Route path="/orders" element={<Suspense fallback={<div>Loading...</div>}><LazyOrders /></Suspense>} />
          <Route path="/products" element={<Suspense fallback={<div>Loading...</div>}><LazyProductInventory /></Suspense>} />
    </Routes>
    </main>
        </div>
  );
};

export default AdminRoutes;
