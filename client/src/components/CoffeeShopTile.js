import React from "react";
import { Link } from "react-router-dom"

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking } = props.coffeeShop
  const wifiDisplay = ""
  const parkingDisplay = ""
  wifi ? wifiDisplay = <li>Wifi is available.</li> : wifiDisplay = <li>Wifi not available.</li>
  parking ? parkingDisplay = <li>Parking is available.</li> : parkingDisplay = <li>Parking not available.</li>
  
  return (
    <div>
      <Link to={`/coffee-shops/${id}`}>
        <h5>{name}</h5>
      </Link>
      <ul>
        <li>{city}</li>
        <li>{hours}</li>
        {wifiDisplay}
        {parkingDisplay}
      </ul>
    </div>
  );
};
export default CoffeeShopTile;