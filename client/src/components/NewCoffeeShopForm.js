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
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={newCoffeeShop.name}
                />
            </label>

            <label>
                City:
                <input
                    type="text"
                    name="city"
                    onChange={handleInputChange}
                    value={newCoffeeShop.city}
                />
            </label>

            <label>
                Address:
                <input
                    type="text"
                    name="address"
                    onChange={handleInputChange}
                    value={newCoffeeShop.address}
                />
            </label>

            <label>
                Zip:
                <input
                    type="text"
                    name="zip"
                    onChange={handleInputChange}
                    value={newCoffeeShop.zip}
                />
            </label>

            <label>
                Hours:
                <input
                    type="text"
                    name="hours"
                    onChange={handleInputChange}
                    value={newCoffeeShop.hours}
                />
            </label>

            <label>
                Wifi:
                <input
                    type="checkbox"
                    name="wifi"
                    onChange={handleInputChange}
                    value={newCoffeeShop.wifi}
                />
            </label>

            <label>
                Parking:
                <input
                    type="checkbox"
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