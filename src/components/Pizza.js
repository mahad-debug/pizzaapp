import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pizza({ pizza }) {
   
  AOS.init({
    
  })

  const [quantity, setquantity] = useState(1);
  const [varients, setvarients] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(pizza, quantity, varients));
  }
  return (
     <div
     data-aos='zoom-in'
     className='"navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded"'>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100">
          <p>varients</p>
          <select
            className="form-control"
            value={varients}
            onChange={(e) => {
              setvarients(e.target.value);
            }}
          >
            {pizza.varients.map((varients) => {
              return <option value={varients}>{varients}</option>;
            })}
          </select>
        </div>

        <div className="w-100">
          <p>Quantity</p>

          {/* [...Array(10).keys()]: creates an array of ten numbers from 0 to 9 using the Array constructor and the keys() method.

.map((x, i) => {...}): maps over the array and creates a new array of <option> elements based on the current index value and its position in the array.

return <option value={i + 1}>{i + 1}</option>;: creates a new <option> element with a value of the current index value plus 1, and displays the index value plus 1 as text. */}

          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : {pizza.prices[0][varients] * quantity} Rs/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "300px !important" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
