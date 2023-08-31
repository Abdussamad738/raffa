import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import * as yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';
const ProductEditForm = ({ initialValues, handleClose }) => {
  const [editedValues, setEditedValues] = useState(initialValues);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
  const [sizes, setSizes] = useState([{ key: 'S', value: '100' }]);
  const handleAddSize = () => {
    setSizes([...sizes, { key: '', value: '' }]);
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = [...sizes];
    updatedSizes.splice(index, 1);
    setSizes(updatedSizes);
  };

  const handleSizeChange = (index, field, value) => {
    const updatedSizes = [...editedValues.sizes];
    updatedSizes[index][field] = value;
    setEditedValues((prevValues) => ({
      ...prevValues,
      sizes: updatedSizes,
    }));
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      // Define your validation schema here if needed
    }),
    onSubmit: async (values) => {
      try {
        console.log(JSON.stringify(values))
        // Handle your API call to update the product with the updated values
        const response = await axios.patch(
          `${backendUrl}/products/${values.id}`,
          values
        );

        // Handle the success and any other actions (e.g., closing modal)
        console.log('Product updated successfully:', response.data);
        handleClose();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Other fields */}
      <Box>
      <TextField
          label="Name"
          value={formik.values.Name}
          onChange={formik.handleChange}
          name="Name"
          error={formik.touched.Name && formik.errors.Name}
          helperText={formik.touched.Name && formik.errors.Name}
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
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
        />
        <TextField
          label="Dimensions"
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
        
        {formik.values.sizes.map((size, index) => (
          <div key={index}>
            <TextField
              label={`Size ${index + 1}`}
              name={`sizes.${index}.key`}
              value={size.key}
              onChange={(e) => handleSizeChange(index, 'key', e.target.value)}
            />
            <TextField
              label={`Price ${index + 1}`}
              name={`sizes.${index}.value`}
              value={size.value}
              onChange={(e) => handleSizeChange(index, 'value', e.target.value)}
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
      <Button type="submit" variant="contained" color="primary">
        Save Changes
      </Button>
      
      {/* Buttons for Save and Cancel */}
    </form>
  );
};

export default ProductEditForm;