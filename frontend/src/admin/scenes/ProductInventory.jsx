import React, { useState,useEffect } from 'react';
import { useSelector} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box,Button, Modal, TextField,useTheme } from '@mui/material';
import { tokens } from "../../theme";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteProductSuccess,fetchProducts } from '../../utils/productActions';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../index.css'
import { useFormik } from "formik";
import { AxiosError } from "axios";
import ProductEditForm from './ProductEditForm';
// import { fetchProducts } from '../../utils/productActions';
import Header from "../components/Header";
export default function ProductInventory ()  {
//   const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
const [editingProduct, setEditingProduct] = useState(null);
const handleEditClick = (product) => {
  setEditingProduct(product);
  setEditModalOpen(true);
};
  const theme = useTheme();
   // eslint-disable-next-line
  const [error, setError] = useState("");
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const {  token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Name', headerName: 'Name', flex: 2 },
    { field: 'actualPrice', headerName: 'Actual Price' , flex: 1},
    { field: 'offerPrice', headerName: 'Offer Price', flex: 1 },
    { field: 'sizes', headerName: 'Sizes', flex: 1 },
    { field: 'color', headerName: 'Colour', flex: 1 },
    { field: 'description', headerName: 'Description' , flex: 2},
    { field: 'dimension', headerName: 'Dimension', flex: 1 },
    { field: 'features', headerName: 'Features', flex: 1 },
    { field: 'image', headerName: 'Image', flex: 1 },
    { field: 'category', headerName: 'Category' , flex: 1},
    { field: 'ratings', headerName: 'Ratings', flex: 1 },
    { field: 'specifications', headerName: 'Specifications', flex: 1 },
    { field: 'quantityInStock', headerName: 'Quantity In Stock', flex: 1 },
    { field: 'deliveryTime', headerName: 'Delivery Time', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <div >
        <Button variant="contained" color="primary" onClick={() => handleEditClick(row)}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleDeleteProduct(row.id)}>
          Delete
        </Button>
      </div>
      ), flex: 2
      
      
    },
    
  ];

  const handleDeleteProduct = async (productId) => {
    try {
      // Make a DELETE request to remove the product from the server
      const response = await axios.delete(`${backendUrl}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      if (response.status === 200) {
        console.log('Product deleted successfully');
        dispatch(deleteProductSuccess(productId));
        dispatch(fetchProducts());
        window.alert("Succesfully deleted the product");
        // Refresh the products list after deletion
        // You may dispatch an action to fetch the updated products list
      } else {
        console.log('Failed to delete product');
        // Handle the error here
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  
  

    
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const formattedProducts = products.map((product) => ({
    id: product._id,
    Name: product.Name,
    actualPrice: product.actualPrice||null,
    offerPrice:product.offerPrice||null,
    sizes: product.sizes||null,
    color: product.colour||null,
    description: product.description||null,
    dimension: product.dimensions||null,
    features:product.features||null,
    image: product.image||null,
    category: product.category||null,
    ratings: product.ratings||null,
    specifications: product.specifications||null,
    quantityInStock:product.quantityInStock||null,
    deliveryTime: product.deliveryTime||null,
  }));
  const [sizes, setSizes] = useState([{ key: 'S', value: '100' }]);
  const handleAddSize = () => {
    setSizes([...sizes, { key: '', value: '' }]);
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/products/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setProducts(data);
        dispatch(products); // Dispatch the action to update the user state        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchProducts();
    // eslint-disable-next-line
  }, [dispatch, token]);
  
  const onSubmit = async (values) => {
    setError("");
    const categoriesArray = values.category.split(',').map((category) => category.trim());
    const imagesArray = values.image.split(',').map((image) => image.trim());
    const coloursArray = values.colour.split(',').map((colour) => colour.trim());
    const ratingsArray = values.ratings.split(',').map((rating)=>rating.trim());
    // Handle features as an array of objects
    const featuresString = values.features.split(',').map((feature) => feature.trim());
    const updatedValues = { ...values,features: featuresString, category: categoriesArray, colour: coloursArray,image:imagesArray,ratings:ratingsArray };
    try {
      const response = await axios.post(
        `${backendUrl}/products/`,
        updatedValues
      );
      console.log(JSON.stringify(response,updatedValues))
      setOpenModal(false);
      
      

      // Redirect the user after successful registration (optional)
       // Replace '/login' with the desired route for the login page
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };
  
  
  const formik = useFormik({
    initialValues: {
      Name: '',
      actualPrice: '',
      offerPrice: '',
      sizes: [],
      colour: '',
      description: '',
      dimensions: '',
      features: '',
      image: '',
      category: '',
      ratings: '',
      specifications: '',
      quantityInStock: '',
      deliveryTime: '',
      instorePickupTime:'',
    },
    onSubmit,
  });

  


  
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add Product
      </Button>
      <Box m="20px">
      <Header title="Product Inventory" subtitle="Managing the Products" />
      <Box
        m="40px 0 0 10px"
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
        <DataGrid checkboxSelection rows={formattedProducts} columns={columns} />
      </Box>
    </Box>
      {/* <DataGrid rows={formattedProducts} columns={columns} /> */}
      <Modal open={openModal} onClose={handleModalClose}>
      <Box className="modal-container" >
  <div className='modal-product'style={{ overflowY: 'auto' ,height: '80vh'}}>
  <Box m="20px">
      <Header title="Add Product" subtitle="Add a New Product to the Inventory" />

   
        <form onSubmit={formik.handleSubmit} >
    <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >

    <TextField
      label="Name"
      value={formik.values.Name}
      onChange={formik.handleChange}
      name="Name"
      
    />
    <TextField
      label="Actual Price"
      value={formik.values.actualPrice}
      onChange={formik.handleChange}
      name="actualPrice"
    />
    <TextField
      label="Offer Price"
      value={formik.values.offerPrice}
      onChange={formik.handleChange}
      name="offerPrice"
    />
    <TextField
      label="Colour"
      value={formik.values.colour}
      onChange={formik.handleChange}
      name="colour"
    />
    <TextField
      label="Description"
      value={formik.values.description}
      onChange={formik.handleChange}
      name="description"
    />
    <TextField
      label="Dimension"
      value={formik.values.dimensions}
      onChange={formik.handleChange}
      name="dimension"
    />
    <TextField
      label="Features"
      value={formik.values.features}
      onChange={formik.handleChange}
      name="features"
    />
    <TextField
      label="Image"
      value={formik.values.image}
      onChange={formik.handleChange}
      name="image"
    />
    <TextField
      label="Category"
      value={formik.values.category}
      onChange={formik.handleChange}
      name="category"
    />

    <TextField
      label="Ratings"
      value={formik.values.ratings}
      onChange={formik.handleChange}
      name="ratings"
    />
    <TextField
      label="Specifications"
      value={formik.values.specifications}
      onChange={formik.handleChange}
      name="specifications"
    />
    <TextField
      label="Quantity In Stock"
      value={formik.values.quantityInStock}
      onChange={formik.handleChange}
      name="quantityInStock"
    />
    <TextField
      label="Delivery Time"
      value={formik.values.deliveryTime}
      onChange={formik.handleChange}
      name="deliveryTime"
    />
    <TextField
      label="Instore Pick-up Time"
      value={formik.values.instorePickupTime}
      onChange={formik.handleChange}
      name="instorePickupTime"
    />
    {sizes.map((size, index) => (
    <div key={index}>
      <TextField
        label={`Size ${index + 1} `}
        name={`sizes.${index}.key`}
        value={formik.values.sizes.key}
        onChange={formik.handleChange}
      />
      <TextField
        label={`Price ${index + 1} `}
        name={`sizes.${index}.value`}
        value={formik.values.sizes[index]  === undefined ? '' : formik.values.sizes[index].value}
        onChange={formik.handleChange}
        />
      <button type="button" onClick={() => handleRemoveSize(index)}>
        Remove Size
      </button>
    </div>
  ))}
  <button type="button" onClick={handleAddSize}>
    Add Size
  </button>
    </Box>
    <Box display="flex" justifyContent="end" mt="20px">
    <Button type="submit" color="secondary" variant="contained">
      Add the product
    </Button>
  </Box>
   
    </form>
    {/* )}
  </Formik> */}
 
  </Box>
  </div>
  </Box>
</Modal>

<Modal open={editModalOpen} onClose={handleEditModalClose}>
  <Box className="modal-container">
  <div className='modal-product'style={{ overflowY: 'auto' ,height: '80vh'}}>
  <Box m="20px">
      <Header title="Edit Product"  />

      {/* Rest of the modal content */}
      {editingProduct && (
        <ProductEditForm
          initialValues={editingProduct}
          handleClose={() => setEditModalOpen(false)}
        />
      )}
      </Box>
    </div>
  </Box>
</Modal>
</div>
    
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
 // eslint-disable-next-line
const validationSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});



