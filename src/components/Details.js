import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Details = () => {
  const params = useParams()
  const index = params.index.split(':')[1]
  const countries = useSelector((state) => state)
  return (
    <div>
      <h1>Country: {countries.data[index].CountryName}</h1>
      <h1>Date: {countries.data[index].Date}</h1>
      <h1>Total Confirmed Cases: {countries.data[index].TotalConfirmed}</h1>
      <h1>New Confirmed Cases: {countries.data[index].NewConfirmed}</h1>
      <h1>New Recovered: {countries.data[index].NewRecovered}</h1>
      <h1>Total Deaths: {countries.data[index].TotalDeath}</h1>
      <h1>New Deaths: {countries.data[index].NewDeath}</h1>
    </div>
  )
}

export default Details