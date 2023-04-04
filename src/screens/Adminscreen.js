import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import {Userslist}  from "./Userslist";


export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to="/admin/userslist" style={{ color: "blue" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to="/admin/pizzaslist" style={{ color: "blue" }}>
                Pizzas List
              </Link>
            </li>
            <li>
              <Link to="/admin/addpizza" style={{ color: "blue" }}>
                Add Pizza
              </Link>
            </li>
            <li>
              <Link to="/admin/orderslist" style={{ color: "blue" }}>
                Orders List
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
