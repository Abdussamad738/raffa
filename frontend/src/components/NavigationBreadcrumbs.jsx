import { Breadcrumbs, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavigationBreadcrumbs = () => {
  return (
    <Breadcrumbs separator="|"aria-label="breadcrumb">
      <Link underline="hover" color="inherit" component={NavLink} to="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" component={NavLink} to="/shop">
        Shop 
      </Link>
      <Link underline="hover" color="inherit" component={NavLink} to="/user">
        User
      </Link>
    </Breadcrumbs>
  );
};
