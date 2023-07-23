import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminRoutes from '../admin';

const AdminAuthCheck = () => {
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const { user, token } = useSelector((state) => state.user); // Access user and token from the Redux store
  console.log("from AdminAuthCheck",backendUrl)
  useEffect(() => {
    console.log("from useEffect")
    // Check if user is authenticated and has admin access
    const checkAdminAccess = async () => {
      try {
        // Send a request to your backend to verify the user's access level
        const response = await fetch(`${backendUrl}/admin/check-access`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          // User has admin access, continue to the AdminRoutes
          
          navigate('/admin');
        }
     else {
        // User does not have admin access, redirect to a different page or show an error message
        navigate('/error-page'); // Replace '/error-page' with the desired route
      }}
       catch (error) {
        console.error('Error checking admin access:', error);
        navigate('/error-page'); // Redirect to an error page or a different route
      }
    };

    if (user && token) {
      checkAdminAccess(); // If user is authenticated, check their access level
    } else {
      navigate('/login'); // If user is not authenticated, redirect to the login page
    }
  }, [user, token]);

  return <AdminRoutes />; // Render the nested routes inside the AdminRoutes
};

export default AdminAuthCheck;
