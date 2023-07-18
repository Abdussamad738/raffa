import React, { useState, useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box,Button, Modal, TextField,useTheme } from '@mui/material';
import { tokens } from "../../theme";
import axios from 'axios';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../index.css'
import { fetchProducts } from '../../utils/productActions';
import Header from "../components/Header";
const ProductInventory = () => {
//   const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [newProduct, setNewProduct] = useState({
    _id: '',
    name: '',
    actualPrice: '',
    offerPrice: '',
    sizes: '',
    color: '',
    description: '',
    dimension: '',
    features: '',
    image: '',
    category: '',
    ratings: '',
    specifications: '',
    quantityInStock: '',
    deliveryTime: '',
  });
  const isNonMobile = useMediaQuery("(min-width:600px)");
  

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Name', headerName: 'Name' },
    { field: 'actualPrice', headerName: 'Actual Price' },
    { field: 'offerPrice', headerName: 'Offer Price' },
    { field: 'sizes', headerName: 'Sizes' },
    { field: 'color', headerName: 'Colour' },
    { field: 'description', headerName: 'Description' },
    { field: 'dimension', headerName: 'Dimension' },
    { field: 'features', headerName: 'Features' },
    { field: 'image', headerName: 'Image' },
    { field: 'category', headerName: 'Category' },
    { field: 'ratings', headerName: 'Ratings' },
    { field: 'specifications', headerName: 'Specifications' },
    { field: 'quantityInStock', headerName: 'Quantity In Stock' },
    { field: 'deliveryTime', headerName: 'Delivery Time' },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <Button variant="contained" color="primary" onClick={() => handleEditProduct(row.id)}>
          Edit
        </Button>
      ),
    },
  ];
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchProducts());

//   }, [dispatch]);
  const products = useSelector((state) => state.products.products);

  const formattedProducts = products.map((product) => ({
    id: product._id,
    Name: product.Name,
    actualPrice: product.Actual_Price||null,
    offerPrice:product.Offer_Price||null,
    sizes: product.sizes||null,
    color: product.Colour||null,
    description: product.Description||null,
    dimension: product.Dimensions||null,
    features:product.Features||null,
    image: product.Image||null,
    category: product.category||null,
    ratings: product.Ratings||null,
    specifications: product.Specifications||null,
    quantityInStock:product.Quantity_in_Stock||null,
    deliveryTime: product.Delivery_Time||null,
  }));

  
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('//products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };
console.log("products from productInventory:",formattedProducts)
  const handleEditProduct = (productId) => {
    // Implement edit product logic here
    console.log('Editing product with ID:', productId);
  };

  const handleAddProduct = () => {
    // Implement add product logic here
    console.log('Adding a new product:', newProduct);
    // Reset the newProduct state and close the modal
    setNewProduct({
      id: '',
      name: '',
      actualPrice: '',
      offerPrice: '',
      sizes: '',
      color: '',
      description: '',
      dimension: '',
      features: '',
      image: '',
      category: '',
      ratings: '',
      specifications: '',
      quantityInStock: '',
      deliveryTime: '',
    });
    setOpenModal(false);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add Product
      </Button>
      <Box m="20px">
      <Header title="Product Inventory" subtitle="Managing the Products" />
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
        <DataGrid checkboxSelection rows={formattedProducts} columns={columns} />
      </Box>
    </Box>
      {/* <DataGrid rows={formattedProducts} columns={columns} /> */}
      <Modal open={openModal} onClose={handleModalClose}>
  <div className='modal-product'>
  <Box m="20px">
      <Header title="Add Product" subtitle="Add a New Product to the Inventory" />

    <Formik
      onSubmit={handleAddProduct}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
    <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            ></Box>
    <TextField
      label="ID"
      value={values.id}
      onChange={handleChange}
      onBlur={handleBlur}
      name="id"
      error={touched.id && errors.id}
      helperText={touched.id && errors.id}
    />
    <TextField
      label="Name"
      value={values.Name}
      onChange={handleChange}
      onBlur={handleBlur}
      name="Name"
      error={touched.Name && errors.Name}
      helperText={touched.Name && errors.Name}
    />
    <TextField
      label="Actual Price"
      value={values.actualPrice}
      onChange={handleChange}
      onBlur={handleBlur}
      name="actualPrice"
      error={touched.actualPrice && errors.actualPrice}
      helperText={touched.actualPrice && errors.actualPrice}
    />
    <TextField
      label="Offer Price"
      value={values.offerPrice}
      onChange={handleChange}
      onBlur={handleBlur}
      name="offerPrice"
      error={touched.offerPrice && errors.offerPrice}
      helperText={touched.offerPrice && errors.offerPrice}
    />
    <TextField
      label="Sizes"
      value={values.sizes}
      onChange={handleChange}
      onBlur={handleBlur}
      name="sizes"
      error={touched.sizes && errors.sizes}
      helperText={touched.sizes && errors.sizes}
    />
    <TextField
      label="Color"
      value={values.color}
      onChange={handleChange}
      onBlur={handleBlur}
      name="color"
      error={touched.color && errors.color}
      helperText={touched.color && errors.color}
    />
    <TextField
      label="Description"
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
      name="description"
      error={touched.description && errors.description}
      helperText={touched.description && errors.description}
    />
    <TextField
      label="Dimension"
      value={values.dimension}
      onChange={handleChange}
      onBlur={handleBlur}
      name="dimension"
      error={touched.dimension && errors.dimension}
      helperText={touched.dimension && errors.dimension}
    />
    <TextField
      label="Features"
      value={values.features}
      onChange={handleChange}
      onBlur={handleBlur}
      name="features"
      error={touched.features && errors.features}
      helperText={touched.features && errors.features}
    />
    <TextField
      label="Image"
      value={values.image}
      onChange={handleChange}
      onBlur={handleBlur}
      name="image"
      error={touched.image && errors.image}
      helperText={touched.image && errors.image}
    />
    <TextField
      label="Category"
      value={values.category}
      onChange={handleChange}
      onBlur={handleBlur}
      name="category"
      error={touched.category && errors.category}
      helperText={touched.category && errors.category}
    />
    <TextField
      label="Ratings"
      value={values.ratings}
      onChange={handleChange}
      onBlur={handleBlur}
      name="ratings"
      error={touched.ratings && errors.ratings}
      helperText={touched.ratings && errors.ratings}
    />
    <TextField
      label="Specifications"
      value={values.specifications}
      onChange={handleChange}
      onBlur={handleBlur}
      name="specifications"
      error={touched.specifications && errors.specifications}
      helperText={touched.specifications && errors.specifications}
    />
    <TextField
      label="Quantity In Stock"
      value={values.quantityInStock}
      onChange={handleChange}
      onBlur={handleBlur}
      name="quantityInStock"
      error={touched.quantityInStock && errors.quantityInStock}
      helperText={touched.quantityInStock && errors.quantityInStock}
    />
    <TextField
      label="Delivery Time"
      value={values.deliveryTime}
      onChange={handleChange}
      onBlur={handleBlur}
      name="deliveryTime"
      error={touched.deliveryTime && errors.deliveryTime}
      helperText={touched.deliveryTime && errors.deliveryTime}
    />
    
    <Box display="flex" justifyContent="end" mt="20px">
    <Button type="submit" color="secondary" variant="contained">
      Add the product
    </Button>
  </Box>
   
    </form>
    )}
  </Formik>
 
  </Box>
  </div>
</Modal>
</div>
    
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

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
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default ProductInventory;
