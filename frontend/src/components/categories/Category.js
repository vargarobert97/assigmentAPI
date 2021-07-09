import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
  const [categories, setCategories] = useState([]);

  return (
    <tr>
      <td>{props.category.categoryName}</td>
      <td> {props.category.categoryDescription}</td>
    </tr>
  );
};

export default Category;
