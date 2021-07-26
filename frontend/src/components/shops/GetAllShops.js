import React, { useState, useEffect } from "react";
import axios from "axios";
import Shop from "./Shop";

const GetAllShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/shops"
      )
      .then((res) => {
        //console.log(res);
        setShops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Shop Name</th>
            <th scope="col">Shop City</th>
            <th scope="col">Shop Address</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <Shop key={shop.id} shop={shop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllShops;
