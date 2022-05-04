import React from "react";

const CoffeeShopTile = ({ name, city, address, zip, hours, wifi, parking }) => {
  return (
    <div>
      <h5>{name}</h5>
      <ul>
        <li>{city}</li>
        <li>{address}</li>
        <li>{zip}</li>
        <li>{hours}</li>
        <li>{wifi}</li>
        <li>{parking}</li>
      </ul>
    </div>
  );
};
export default CoffeeShopTile;
