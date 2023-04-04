import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import Dropdown from "react-bootstrap/Dropdown";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
    const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          PIZZA
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button> */}

        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic-button" title="Dropdown button">
                    {currentUser.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      className="nav-link"
                      href="/Login"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      logout
                    </Dropdown.Item>
                    <Dropdown.Item href="/orders">Order</Dropdown.Item>
                    <Dropdown.Item href="/cart">
                      Cart {cartstate.cartItems.length}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Orders
                  </a>
                  <a className="dropdown-item" href="#">
                    logout
                  </a>
                </div> */}
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            {/* 
            <li className="nav-item">
              <a className="nav-link" href="/SignIn">
                Sign Up
              </a>
            </li> */}

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </ul>
        
      </nav>
    </div>
  );
}


