import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Error from './Error'
import Loading from './Loading'
import Success  from './Success'
export default function Checkout({subtotal}) {


  const orderstate = useSelector((state)=>state.placeOrderReducer)
  const {loading, error, success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }
    return (
      <div>
        {loading && <Loading />}
        {error && <Error error="something went wrong" />}
        {success && <Success success="Your Order Placed Successfully"/>}
        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHander}
          stripeKey="pk_test_51Mm0qCEG8UQadeCpwe3aN0W3vlKHa9nQ3yKUfKHEPrAEVwIDwh67frKeoGghbwgIdtTWSB3941CtXk3fwdHUMCPD006CRVpEuh"
          currency="PKR"
        >
          <button className="btn"> Pay Now</button>
        </StripeCheckout>
      </div>
    );
}