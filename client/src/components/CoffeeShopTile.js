import React from "react";
import { Link } from "react-router-dom"

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking, id } = props.coffeeShop

  const wifiDisplay = wifi ? "Wifi Available" : "No Wifi"
  const parkingDisplay = parking ? "Parking Available" : "No Parking"

  return (
    <div className="tile">
      <div>
        <Link to={`/coffee-shops/${id}`} className="react-link">
          <h5>{name}</h5>
        </Link>
        <div>
          <ul>
            <li>{city}</li>
            <li>{hours}</li>
            <li>{wifiDisplay}</li>
            <li>{parkingDisplay}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CoffeeShopTile;