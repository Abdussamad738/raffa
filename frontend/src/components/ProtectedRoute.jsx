
import { useSelector } from 'react-redux';



import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user= useSelector((state) => state.user.user); 
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;