import React from "react";

const CoffeeShopTile = (props) => {
  const { name, city, hours, wifi, parking } = props.coffeeShop

  return (
    <div>
      <h5>{name}</h5>
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