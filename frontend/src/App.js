import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from 'axios';

import Navbar from "./UI/Navbar";

import Lists from "./UI/Lists";
import Shops from "./UI/Shops";
import Categories from "./UI/Categories";

//Shop Components
import GetAllShops from "./components/shops/GetAllShops";
import GetSingleShop from "./components/shops/GetSingleShop";
import CreateShop from "./components/shops/CreateShop";

//Category Components
import CreateCategory from "./components/categories/CreateCategory";
import GetSingleCategory from "./components/categories/GetSingleCategory";
import GetAllCategories from "./components/categories/GetAllCategories";

//List Components
import CreateList from "./components/lists/CreateList";
import EditList from "./components/lists/EditList";
import GetAllLists from "./components/lists/GetAllLists";
import GetSingleList from "./components/lists/GetSingleList";

import Form from "./components/Form";
import FormList from "./components/FormList";
import CreateNewItem from "./components/items/CreateNewItem";

function App() {
  const [inputText, setInputText] = useState(""); //Input text for the form
  const [shops, setShops] = useState([]); //Items in the form (ovde treba da stavis shop, category i items)
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("");
  const [loaded, setLoaded] = useState([]);

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/lists" exact component={CreateList} />
          <Route path="/shops" exact component={CreateShop} />
          <Route path="/categories" exact component={CreateCategory} />
          <Route path="/lists/:id/items" exact component={CreateNewItem} />
        </div>
      </Router>
    </div>
  );
}

export default App;
