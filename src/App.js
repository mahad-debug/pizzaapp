import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
      <Cartscreen />

      {/* <BrowserRouter>
        <Route path="/" component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
