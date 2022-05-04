import React from "react";
import { Link } from "react-router-dom"

const CoffeeShopTile = ({ id, name, city, hours, wifi, parking }) => {
  let wifiItem = ""
  if (wifi) {
    wifiItem = <li>Wifi Available</li>
  }

  let parkingItem = ""
  if (parking) {
    parkingItem = <li>Parking Available</li>
  }

  return (
    <div>
      <Link to={`/coffee-shops/${id}`}>
        <h5>{name}</h5>
      </Link>
      <ul>
        <li>{city}</li>
        <li>{hours}</li>
        {wifiItem}
        {parkingItem}
      </ul>
    </div>
  );
};
export default CoffeeShopTile;
