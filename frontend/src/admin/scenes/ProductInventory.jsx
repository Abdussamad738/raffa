import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box,Button, Modal, TextField,useTheme } from '@mui/material';
import { tokens } from "../../theme";
import axios from 'axios';

import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../index.css'
import { useFormik } from "formik";
import { AxiosError } from "axios";

// import { fetchProducts } from '../../utils/productActions';
import Header from "../components/Header";
export default function ProductInventory ()  {
//   const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
   // eslint-disable-next-line
  const [error, setError] = useState("");
  const colors = tokens(theme.palette.mode);
  // const [newProduct, setNewProduct] = useState({
  //   _id: '',
  //   name: '',
  //   actualPrice: '',
  //   offerPrice: '',
  //   sizes: '',
  //   color: '',
  //   description: '',
  //   dimension: '',
  //   features: '',
  //   image: '',
  //   category: '',
  //   ratings: '',
  //   specifications: '',
  //   quantityInStock: '',
  //   deliveryTime: '',
  // });
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
  
  const onSubmit = async (values) => {
    console.log("from onSubmit",JSON.stringify(values))
    setError("");
    const categoriesArray = values.category.split(',').map((category) => category.trim());
    const imagesArray = values.image.split(',').map((image) => image.trim());
    const coloursArray = values.colour.split(',').map((colour) => colour.trim());
    
    // Handle features as an array of objects
    const featuresString = values.features.split(',').map((feature) => feature.trim());
    const updatedValues = { ...values,features: featuresString, category: categoriesArray, colour: coloursArray,image:imagesArray };
    try {
      const response = await axios.post(
        `${backendUrl}/products/`,
        updatedValues
      );
      console.log(JSON.stringify(response,updatedValues))
      
      

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

// console.log("products from productInventory:",formattedProducts)
  const handleEditProduct = (productId) => {
    // Implement edit product logic here
    console.log('Editing product with ID:', productId);
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

    {/* <Formik
      onSubmit={handleAddProduct}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        // errors,
        touched,
        handleBlur,
        formik.handleChange,
        handleSubmit,
      }) => ( */}
        <form onSubmit={formik.handleSubmit} >
    <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
    {/* <TextField
      label="ID"
      value={values.id}
      onChange={formik.handleChange}
      onBlur={handleBlur}
      name="id"
      // // error={touched.id && errors.id}
      // helperText={touched.id && errors.id}
    /> */}
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
      // onBlur={handleBlur}
      name="actualPrice"
      // // error={touched.actualPrice && errors.actualPrice}
      // helperText={touched.actualPrice && errors.actualPrice}
    />
    <TextField
      label="Offer Price"
      value={formik.values.offerPrice}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="offerPrice"
      // // error={touched.offerPrice && errors.offerPrice}
      // helperText={touched.offerPrice && errors.offerPrice}
    />
    {/* <TextField
      label="Sizes"
      value={formik.values.sizes}
      onChange={formik.handleChange}
      onBlur={handleBlur}
      name="sizes"
      // // error={touched.sizes && errors.sizes}
      // helperText={touched.sizes && errors.sizes}
    /> */}
    
    <TextField
      label="Colour"
      value={formik.values.colour}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="colour"
      // // error={touched.color && errors.color}
      // helperText={touched.color && errors.color}
    />
    <TextField
      label="Description"
      value={formik.values.description}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="description"
      // // error={touched.description && errors.description}
      // helperText={touched.description && errors.description}
    />
    <TextField
      label="Dimension"
      value={formik.values.dimensions}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="dimension"
      // // error={touched.dimension && errors.dimension}
      // helperText={touched.dimension && errors.dimension}
    />
    <TextField
      label="Features"
      value={formik.values.features}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="features"
      // // error={touched.features && errors.features}
      // helperText={touched.features && errors.features}
    />
    <TextField
      label="Image"
      value={formik.values.image}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="image"
      // // error={touched.image && errors.image}
      // helperText={touched.image && errors.image}
    />
    <TextField
      label="Category"
      value={formik.values.category}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="category"
      // // error={touched.category && errors.category}
      // helperText={touched.category && errors.category}
    />

    <TextField
      label="Ratings"
      value={formik.values.ratings}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="ratings"
      // // error={touched.ratings && errors.ratings}
      // helperText={touched.ratings && errors.ratings}
    />
    <TextField
      label="Specifications"
      value={formik.values.specifications}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="specifications"
      // // error={touched.specifications && errors.specifications}
      // helperText={touched.specifications && errors.specifications}
    />
    <TextField
      label="Quantity In Stock"
      value={formik.values.quantityInStock}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="quantityInStock"
      // // error={touched.quantityInStock && errors.quantityInStock}
      // helperText={touched.quantityInStock && errors.quantityInStock}
    />
    <TextField
      label="Delivery Time"
      value={formik.values.deliveryTime}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="deliveryTime"
      // // error={touched.deliveryTime && errors.deliveryTime}
      // helperText={touched.deliveryTime && errors.deliveryTime}
    />
    <TextField
      label="Instore Pick-up Time"
      value={formik.values.instorePickupTime}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
      name="instorePickupTime"
      // // error={touched.deliveryTime && errors.deliveryTime}
      // helperText={touched.deliveryTime && errors.deliveryTime}
    />
    {sizes.map((size, index) => (
    <div key={index}>
      <TextField
        label={`Size ${index + 1} `}
        name={`sizes.${index}.key`}
        value={formik.values.sizes.key}
        onChange={formik.handleChange}
        // onBlur={handleBlur}
        // // error={touched.sizes&& errors.sizes}
      // helperText={touched.sizes && errors.sizes}
      />
      <TextField
        label={`Price ${index + 1} `}
        name={`sizes.${index}.value`}
        value={formik.values.sizes[index]  === undefined ? '' : formik.values.sizes[index].value}
        onChange={formik.handleChange}
        // onBlur={handleBlur}
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



