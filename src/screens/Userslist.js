import Adminscreen from "./Adminscreen";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { getAllUsers } from "../actions/userActions";
import { deleteUser } from "../actions/userActions";

export function Userslist() {
  const dispatch = useDispatch();
  const usersstate = useSelector(state=>state.getAllUsersReducer)
    const {loading, error, users} = usersstate

  useEffect(()=>{
    dispatch(getAllUsers())
  }, [])
  return (
    <div>
    <Adminscreen/>
    <h1>users list</h1>
    {loading && (<Loading/>)}
    {error && (<Error error="Something get wrong"/>)}
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>
            User Id
          </th>
          <th>
            Name
          </th>
          <th>
            email
          </th>
          <th>
            Delete
          </th>
        </tr>

      </thead>
      <tbody>
        {users && users.map(user=>{
          return <tr>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.email}</td>
            <td><i className="fa fa-trash" onClick={()=>{dispatch(deleteUser(user._id ))}}></i></td>
          </tr>
        })}
      </tbody>
    </table>
    </div>
  );
}
