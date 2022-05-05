import React, { useState, useEffect } from 'react'
import NewReviewForm from './newReviewForm'
import CoffeeShopReviewList from './CoffeeShopReviewList'

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



  const wifiDisplay = coffeeShop.wifi ? "Wifi Available" : "No Wifi"
  const parkingDisplay = coffeeShop.parking ? "Parking Available" : "No Parking"

  return (
    <div>
      <h1>{coffeeShop.name}</h1>
      <p>{coffeeShop.address}</p>
      <p>{coffeeShop.city} {coffeeShop.zip}</p>
      <p>{coffeeShop.hours}</p>
      <ul>
        <li>{wifiDisplay}</li>
        <li>{parkingDisplay}</li>
      </ul>
      <CoffeeShopReviewList
        id={coffeeShop.id}
      />
      <NewReviewForm />
    </div>
  )
}

export default CoffeeShopShowPage