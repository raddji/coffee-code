import React, { useState, useEffect } from "react";
import CoffeeShopTile from "./CoffeeShopTile";
import NewCoffeeShopForm from "./NewCoffeeShopForm";
import ErrorList from "./layout/ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const CoffeeShopIndexPage = (props) => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [errors, setErrors] = useState([])

  const getCoffeeShops = async () => {
    try {
      const response = await fetch("/api/v1/coffee-shops");
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

  const postCoffeeShop = async (newCoffeShopData) => {
    try {
      const response = await fetch("/api/v1/coffee-shops", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newCoffeShopData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        } else {
          throw new Error(`${response.status} (${response.statusText})`)
        }
      } else {
        const body = await response.json()
        setErrors([])
        setCoffeeShops([...coffeeShops, body.newCoffeeShop])
      }
    } catch (err) {
      console.error(err)
    }
  }

  const coffeeShopTiles = coffeeShops.map((coffeeShop) => {
    return (
      <CoffeeShopTile
        key={coffeeShop.id}
        coffeeShop={coffeeShop}
      />
    );
  });

  return (
    <div className="list">
      <div className="tiles">
        <h2>Code Brew Spots</h2>
        {coffeeShopTiles}
      </div>
      <div>
        <ErrorList errors={errors} />
        <NewCoffeeShopForm postCoffeeShop={postCoffeeShop}/>
      </div>
    </div>
  )
};

export default CoffeeShopIndexPage;