import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminscreen from "./Adminscreen";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { deliverOrder, getAllOrders } from "../actions/orderActions";

export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, succes, error, orders } = getordersstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div>
      <Adminscreen />
      {loading && <loading />}
      {error && <Error error="something went wrong" />}

      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thread-dark">
          <th>order Id</th>
          <th>email</th>
          <th>User Id</th>
          <th>amount</th>
          <th>date</th>
          <th>status</th>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderamount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>status</td>
                  <td>
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className="btn"
                        onClick={()=>{dispatch(deliverOrder(order._id))}}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
