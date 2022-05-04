import React, { useState, useEffect } from "react";
import CoffeeShopTile from "./CoffeeShopTile";

const CoffeeShopIndexPage = (props) => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  const getCoffeeShops = async () => {
    try {
      const response = await fetch(`/api/v1/coffee-shops`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCoffeeShops(body.coffeeShops);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getCoffeeShops();
  }, []);

  const coffeeShopsTiles = coffeeShops.map((coffeeShop) => {
    return (
      <CoffeeShopTile
        key={coffeeShop.id}
        id={coffeeShop.id}
        name={coffeeShop.name}
        city={coffeeShop.city}
        address={coffeeShop.address}
        zip={coffeeShop.zip}
        hours={coffeeShop.hours}
        wifi={coffeeShop.wifi}
        parking={coffeeShop.parking}
      />
    );
  });

  return <div>{coffeeShopsTiles}</div>;
};

export default CoffeeShopIndexPage;
