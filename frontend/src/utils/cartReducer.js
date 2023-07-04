
export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const  productDetails  = action.payload;
            console.log("this is from productActions and product id and quantity is:",JSON.stringify(productDetails))
            console.log("cart reducer, state.cart:",JSON.stringify(state.cart))
            const existingCartItem = state.cart.find((item) => item.productDetails.productId === productDetails.productId);
            
            if (existingCartItem) {
                console.log("from cart reducer, there is already that item")
              // If the item is already in the cart, update the quantity
              const updatedCart = state.cart.map((item) =>
      item.productDetails.productId === productDetails.productId ? { ...item, quantity: item.productDetails.quantity += productDetails.quantity } : item
    );
              return { ...state, cart: updatedCart };
            } else {
                console.log("there is no items in cart ")
              // If the item is not in the cart, add it
              return { ...state, cart: [...state.cart, { productDetails }] };
            }

            case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productDetails.productId === action.payload.productId
            ? { ...item, productDetails: { ...item.productDetails, quantity: item.productDetails.quantity - 1 } }
            : item
        ),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productDetails.productId === action.payload.productId
            ? { ...item, productDetails: { ...item.productDetails, quantity: item.productDetails.quantity + 1 } }
            : item
        ),
      };
          default:
            console.log("this is from productActions and product id and quantity is:",JSON.stringify(state.cart))
            return state;
    }
  };
  
  
  export default cartReducer;