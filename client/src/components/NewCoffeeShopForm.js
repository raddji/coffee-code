import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

const NewCoffeeShopForm = ({ coffeeShops, setCoffeeShops }) => {
  const [newCoffeeShop, setNewCoffeeShop] = useState({
    name: "",
    city: "",
    address: "",
    zip: "",
    hours: "",
    wifi: false,
    parking: false,
  });
  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/coffee-shops" />;
  }

  const postCoffeeShop = async (newCoffeeShopData) => {
    try {
      const response = await fetch("/api/v1/coffee-shops", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newCoffeeShopData),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          setErrors(newErrors);
        } else {
          throw new Error(`${response.status} (${response.statusText})`);
        }
      } else {
        const body = await response.json();
        setErrors([]);
        setShouldRedirect(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    setNewCoffeeShop({
      ...newCoffeeShop,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleCheckboxToggle = (event) => {
    setNewCoffeeShop({
      ...newCoffeeShop,
      [event.currentTarget.name]: !newCoffeeShop[event.currentTarget.name],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCoffeeShop(newCoffeeShop);
    clearForm();
  };

  const clearForm = () => {
    setNewCoffeeShop({
      name: "",
      city: "",
      address: "",
      zip: "",
      hours: "",
      wifi: false,
      parking: false,
    });
  };

  return (
    <div className="show-page-container list">
      <h2> Add a New Coffee Shop </h2>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={newCoffeeShop.name}
          />
        </label>

        <label htmlFor="city">
          City:
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
            value={newCoffeeShop.city}
          />
        </label>

        <label htmlFor="address">
          Address:
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInputChange}
            value={newCoffeeShop.address}
          />
        </label>

        <label htmlFor="zip">
          Zip:
          <input
            type="text"
            id="zip"
            name="zip"
            onChange={handleInputChange}
            value={newCoffeeShop.zip}
          />
        </label>

        <label htmlFor="hours">
          Hours:
          <input
            type="text"
            id="hours"
            name="hours"
            onChange={handleInputChange}
            value={newCoffeeShop.hours}
          />
        </label>

        <label htmlFor="wifi">
          Wifi:
          <input
            type="checkbox"
            id="wifi"
            name="wifi"
            onChange={handleCheckboxToggle}
            checked={newCoffeeShop.wifi}
          />
        </label>

        <label htmlFor="parking">
          Parking:
          <input
            type="checkbox"
            id="parking"
            name="parking"
            onChange={handleCheckboxToggle}
            checked={newCoffeeShop.parking}
          />
        </label>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewCoffeeShopForm;
