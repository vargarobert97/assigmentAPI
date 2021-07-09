import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
  const [categories, setCategories] = useState([]);

  return (
    <tr>
      <td>{props.category.name}</td>
      <td> {props.category.description}</td>
    </tr>
  );
};

export default Category;
