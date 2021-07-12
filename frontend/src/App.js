import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./UI/Navbar";

import CreateShop from "./components/shops/CreateShop";
import CreateCategory from "./components/categories/CreateCategory";
import CreateList from "./components/lists/CreateList";
import CreateNewItem from "./components/items/CreateNewItem";

function App() {
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
