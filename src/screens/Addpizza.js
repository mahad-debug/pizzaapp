import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Adminscreen from "./Adminscreen";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Addpizza() {

  const [name, setname] = useState('')
  const [smallprice, setsmallprice] = useState('')
  const [mediumprice, setmediumprice] = useState('')
  const [largeprice, setlargeprice] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const dispatch = useDispatch()

  const addpizzastate = useSelector(state=>state.addPizzaReducer)
  const {success , error, loading } = addpizzastate
  function formHandler(e){
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices:{
        small: smallprice,
        medium: mediumprice,
        large: largeprice
      }
    }
    console.log(pizza)
    dispatch(addPizza(pizza))
  }
  return (
    <>
      <div>
        <Adminscreen />
        <div className="text-left">
          <h1>Add pizza</h1>
          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          {success && <Success success="New Pizza Successfully added" />}

          <form onSubmit={formHandler}>
            <input
              className="form-control"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="small varient price"
              value={smallprice}
              onChange={(e) => {
                setsmallprice(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="medium varient price"
              value={mediumprice}
              onChange={(e) => {
                setmediumprice(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="large varient price"
              value={largeprice}
              onChange={(e) => {
                setlargeprice(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="image"
              value={image}
              onChange={(e) => {
                setimage(e.target.value);
              }}
            />
            <button className="btn mt-3" type="submit">
              Add pizza
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
