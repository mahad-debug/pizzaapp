import React, { useEffect, useState } from 'react'
import Adminscreen from './Adminscreen'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { editPizza, getPizzaById } from '../actions/pizzaActions';
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editpizza(){
    const {pizzaid} = useParams();
    const dispatch = useDispatch();
      const [name, setname] = useState("");
      const [smallprice, setsmallprice] = useState("");
      const [mediumprice, setmediumprice] = useState("");
      const [largeprice, setlargeprice] = useState("");
      const [image, setimage] = useState("");
      const [description, setdescription] = useState("");
      const [category, setcategory] = useState("");
      
      const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
const {pizza, error, loading} = getpizzabyidstate;

const editpizzastate = useSelector((state) => state.editPizzaReducer);
const {editloading, editerror, editsuccess} = editpizzastate;

      
    
    useEffect(()=>{


        if(pizza){
            if(pizza._id == pizzaid){
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            }else{
                dispatch(getPizzaById(pizzaid));
            }
        }else{
        dispatch(getPizzaById(pizzaid))
        }
    }, [pizza, dispatch])

    function formHandler(e) {
      e.preventDefault();

      const editedpizza = {
        _id: pizzaid,
        name,
        image,
        description,
        category,
        prices: {
          small: smallprice,
          medium: mediumprice,
          large: largeprice,
        },
      };
      console.log(pizza);
      dispatch(editPizza(editedpizza));
    }
    return (
      <div>
        <Adminscreen />
        <h1>Edit pizza</h1>
        <h1>Pizza Id = {pizzaid}</h1>
        <div className="text-left">
          {editloading && (<Loading />)}
          {editerror && (<Error error="Something went wrong" />)}
          {editsuccess && (
            <Success success="pizza details edited successfully" />
          )}

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
              Edit pizza
            </button>
          </form>
        </div>
      </div>
    );
}