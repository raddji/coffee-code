import React, { useState } from "react"

const NewCoffeeShopForm = ({ postCoffeeShop }) => {
  const [newCoffeeShop, setNewCoffeeShop] = useState({
    name: "",
    city: "",
    address: "",
    zip: "",
    hours: "",
    wifi: "",
    parking: ""
  })

  const handleInputChange = event => {
    setNewCoffeeShop({
      ...newCoffeeShop,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    postCoffeeShop(newCoffeeShop)
    clearForm()
  }

  const clearForm = () => {
    setNewCoffeeShop({
      name: "",
      city: "",
      address: "",
      zip: "",
      hours: "",
      wifi: "",
      parking: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} >

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
          onChange={handleInputChange}
          value={newCoffeeShop.wifi}
        />
      </label>

      <label htmlFor="parking">
        Parking:
        <input
          type="checkbox"
          id="parking"
          name="parking"
          onChange={handleInputChange}
          value={newCoffeeShop.parking}
        />
      </label>

      <input
        className="button"
        type="submit"
        value="Submit"
      />

    </form>
  )
}

export default NewCoffeeShopForm