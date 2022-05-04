import React from "react";
import { Link } from "react-router-dom"

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking } = props.coffeeShop

  return (
    <div>
      <Link to={`/coffee-shops/${id}`}>
        <h5>{name}</h5>
      </Link>
      <ul>
        <li>{city}</li>
        <li>{hours}</li>
        {wifi ? <li>Wifi Available</li> : <li>No Wifi</li>}
        {parking ? <li>Parking Available</li> : <li>No Parking</li>}
      </ul>
    </div>
  );
};
export default CoffeeShopTile;