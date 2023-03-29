import React from "react";
//import './Components/style.css';
import "./style.css";
const Fooditem = (getFood)=> {
  console.log(getFood.data)
  return (
    <>
      <div className="card">
        <img src={getFood.data.strFoodThumb} alt="food" />
        <div className="info">
          <h2>{getFood.data.strFood}</h2>
          <p>{getFood.data.strArea} food</p>
        </div>
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{getFood.data.strInstructions}</p>
          <img src={getFood.data.strFoodThumb} />
          <a href={getFood.data.strSource}>Watch video</a>
        </div>
      </div>
    </>
  );
};
export default Fooditem;
