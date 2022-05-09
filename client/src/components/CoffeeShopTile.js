import React from "react";
import { Link } from "react-router-dom"

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking, id } = props.coffeeShop

  const wifiDisplay = wifi ? "Wifi Available" : "No Wifi"
  const parkingDisplay = parking ? "Parking Available" : "No Parking"

  return (
    <div>
      <Link to={`/coffee-shops/${id}`}>
        <h5>{name}</h5>
      </Link>
      <ul>
        <li>{city}</li>
        <li>{hours}</li>
        <li>{wifiDisplay}</li>
        <li>{parkingDisplay}</li>
      </ul>
    </div>
  );
};
export default CoffeeShopTile;