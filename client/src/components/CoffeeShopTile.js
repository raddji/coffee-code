import React from "react";

const CoffeeShopTile = ({ name, city, hours, wifi, parking }) => {
  let wifiItem = ""
  if (wifi) {
    wifiItem = <li>Wi-fi is Available</li>
  }

  let parkingItem = ""
  if (parking) {
    parkingItem = <li>Parking is Available</li>
  }

  return (
    <div>
      <h5>{name}</h5>
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
