import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { connect } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux';
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { setAllUsers } from '../../utils/userActions';
// import { mockDataTeam } from '../data/mockData.js';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../components/Header";
import React, { useEffect, useState } from 'react';
const Users = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const colors = tokens(theme.palette.mode);
   // eslint-disable-next-line
  const { user, token } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const handleDeleteUser = async (id) => {
    try {
      // Send a POST request to delete the user by ID
      const response = await axios.delete(`/users/${id}`);
  
      console.log(response.data); // User deleted successfully
  
      // Perform any additional actions (e.g., refetch user data)
      // ...
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateUser = (id) => {
    // Implement the update user logic here
    console.log("Updating user with ID:", id);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${backendUrl}/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const formattedUsers = data.map((user) => ({
          id: user._id,
          name: user.name,
          email: user.email,
          phone:user.phone||null,
          role: user.role||null,
        }));
        dispatch(setAllUsers(data)); // Dispatch the action to update the user state
        console.log('users from Users.jsx:', JSON.stringify(data));
        setUsers(formattedUsers);
        console.log("users :",JSON.stringify(data))
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
     // eslint-disable-next-line
  }, [dispatch, token]);

 

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field:"role",
    //   headerName:"Role",
    //   flex:1,

    // }
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin"
                ? colors.greenAccent[600]
                : role === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "manager" && <SecurityOutlinedIcon />}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box display="flex" justifyContent="center">
            <IconButton onClick={() => handleDeleteUser(row.id)}>
              <DeleteOutline color="error" />
            </IconButton>
            <IconButton onClick={() => handleUpdateUser(row.id)}>
              <EditOutlined color="primary" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={users} columns={columns} />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
    token: state.user.token, // Assuming the token is stored under the 'user' reducer in the store
  });

export default connect(mapStateToProps)(Users);