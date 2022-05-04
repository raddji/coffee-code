import React, { useState, useEffect } from 'react'

const CoffeeShopShowPage = (props) => {
  const [coffeeShop, setCoffeeShop] = useState({})
  
  const { id } = props.match.params
  const getCoffeeShop = async () => {
    try {
      const response = await fetch(`/api/v1/coffee-shops/${id}`)

      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }

      const body = await response.json()
      setCoffeeShop(body.coffeeShop)

    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCoffeeShop()
  }, [])

  let parking = ""
  let wifi = ""
  if (coffeeShop.parking) {
    parking = <li>Parking Available</li>
  }
  if (coffeeShop.wifi) {
    wifi = <li>Wifi Available</li>
  }

  return (
    <div>
      <h1>{coffeeShop.name}</h1>

      <p>{coffeeShop.address}</p>
      <p>{coffeeShop.city} {coffeeShop.zip}</p>

      <p>{coffeeShop.hours}</p>

      <ul>
        {parking}
        {wifi}
      </ul>
      
    </div>
  )
}

export default CoffeeShopShowPage