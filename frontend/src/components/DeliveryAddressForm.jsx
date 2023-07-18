import React from 'react'
import { useFormik } from 'formik';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, updateUser, removeUser } from "../utils/userActions";
import { clearCart } from '../utils/productActions';
import {updateDeliveryAddress} from '../utils/userActions'

export default function DeliveryAddressForm ({ setOrderDeliveryAddressInCart  })  {
  const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const deliveryAddressFormik = useFormik({
        initialValues: {
          name:  '', // Set the initial value for each field from orderDeliveryAddress
      buildingName:  '',
      suiteNo:  '',
      street:  '',
      city:  '',
      state:  '',
      phoneNo:  '',
      postalCode:'',
      country:  'UAE',
        },
        onSubmit: (values) => {
          // Call the callback function to set the order.deliveryAddress in the parent component
      setOrderDeliveryAddressInCart(values);
        dispatch(updateUser(values));
        updateDeliveryAddress(user.user._id, values);
          // Handle form submission for delivery address insertion
          console.log('Delivery address form submitted', values);
          // Call API or dispatch Redux action to insert delivery address
        },
      });
      
  return (
    <div>
         <Form onSubmit={deliveryAddressFormik.handleSubmit}>
          <Form.Group as={Row} controlId="formAddressName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={deliveryAddressFormik.values.name}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formAddressBuildingName">
            <Form.Label column sm={2}>
             Apt/Bldg Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="buildingName"
                value={deliveryAddressFormik.values.buildingName}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formAddressSuiteNo">
            <Form.Label column sm={2}>
             Apt/Suite No 
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="suiteNo"
                value={deliveryAddressFormik.values.suiteNo}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formStreet">
            <Form.Label column sm={2}>
              Street
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="street"
                value={deliveryAddressFormik.values.street}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} controlId="formCity">
            <Form.Label column sm={2}>
              City
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="city"
                value={deliveryAddressFormik.values.city}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group> */}

          <Form.Group as={Row} controlId="formState">
            <Form.Label column sm={2}>
              State
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="state"
                value={deliveryAddressFormik.values.state}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPhoneNumber">
            <Form.Label column sm={2}>
              Phone Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                name="phoneNo"
                value={deliveryAddressFormik.values.phoneNo}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPostalCode">
            <Form.Label column sm={2}>
              Postal Code
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="postalCode"
                value={deliveryAddressFormik.values.postalCode}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
              Add Delivery Address
            </Button>
          </Form>
    </div>
  )
}
