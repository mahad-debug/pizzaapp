export const addToCart =
  (pizza, quantity, varients) => (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varients: varients,
      quantity: quantity,
      prices: pizza.prices,
      price: pizza.prices[0][varients] * quantity,
    };
    //agr ider add space to space cart likho gay to nh chalega
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
