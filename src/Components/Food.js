import React, { useState } from "react";
// import Fooditem from ".Components";
import Fooditem from "./Fooditem";
import "./style.css";
const Food = () => {
  const [search, setSearch] = useState("");
  const [Myfood, setFood] = useState([]);
  const searchFood = (evt) => {
    if (evt.key == "Enter") {

      

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setFood(data.food);
          setSearch("");
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>You want it. We get it.</h1>
          <h4>
          Food, African dishes, italian recipes, and more available just for you.
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar" placeholder="Enter food"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchFood}
          />
        </div>
        <div className="container">
          {Myfood == null ? (
            <p className="notSearch">Not found</p>
          ) : (
            Myfood.map((res) => {
              return <Fooditem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Food;
