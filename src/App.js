import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'
import Navbar from "./components/navbar";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Switch,
  Router,
} from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import { createRoot } from "react-dom/client";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import { Userslist } from "./screens/Userslist";
import Pizzaslist from "./screens/Pizzaslist";
import Orderslist from "./screens/Orderslist";
import Addpizza from "./screens/Addpizza";
import Editpizza from "./screens/Editpizza";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homescreen />
      <Cartscreen /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/Cart" element={<Cartscreen />} />
          <Route path="/Login" element={<Loginscreen />} />
          <Route path="/SignIn" element={<Registerscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/Userslist" element={<Userslist />} />
          <Route path="/admin/Pizzaslist" element={<Pizzaslist />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/addpizza" element={<Addpizza />} />
          <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
