import React from "react";

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking } = props.coffeeShop

  const wifiDisplay = wifi ? "Wifi Available" : "No Wifi"
  const parkingDisplay = parking ? "Parking Available" : "No Parking"

  return (
    <div>
      <h5>{name}</h5>
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