import React,{ useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import {  Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { removeUser } from "../../utils/userActions";
import { clearCart } from '../../utils/productActions';
import { insertCartItems } from '../../utils/userActions';
import { useNavigate } from 'react-router-dom';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavigationBreadcrumbs } from '../NavigationBreadcrumbs';
import Avatar from '@mui/material/Avatar';
import './index.css'
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default function SideBarUserDashboard()  {
  const theme = useTheme();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux state
  const navigate = useNavigate();
  
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  
  const userName = user?.name|| 'Guest';
const initials = userName
  .split(' ')
  .map((name) => name[0].toUpperCase())
  .join('');
  const handleLogout = () => {
    let cart=[]
     // eslint-disable-next-line
    const carts= cartItems.map((item)=>(
      cart.push(item)
    ));
    
    dispatch(insertCartItems(user._id, cart));
    
    dispatch(removeUser());
    dispatch(clearCart());

    navigate('/login');
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
      
      {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                paddingTop="8%"
              >
               <NavigationBreadcrumbs/>

                
              </Box>
              )}
        <Menu iconShape="square">
        
        <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <AssistantDirectionIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
               

                
              </Box>
            )}
          </MenuItem>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  My Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar sx={{ bgcolor: "#958c8c" }}>{initials}</Avatar>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?user.name:userName}
                </Typography>
                {/* <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography> */}
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/user"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Orders"
              to="/user/orders"
              icon={<ShoppingBagIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Wishlists"
              to="/user/wishlist"
              icon={<FavoriteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Cart"
              to="/user/cart"
              icon={<ShoppingCartIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Contact Us"
              to="/user/contact"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Button variant="secondary" onClick={handleLogout} className="logout-sidebar">
              Logout
            </Button>
          </Box>
          
        </Menu>
      </ProSidebar>
    </Box>
  );
};

