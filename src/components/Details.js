import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Details = () => {
  const params = useParams()
  const index = params.index
  const countries = useSelector((state) => state)
  return (
    <>
      <div>
        <h1>Covid Data</h1>
      </div>
      <div>
        {countries !== undefined ?
          <div>
            <h2>Country: {countries.data[index].CountryName}</h2>
            <h2>Date: {countries.data[index].Date}</h2>
            <h2>Total Confirmed Cases: {countries.data[index].TotalConfirmed}</h2>
            <h2>New Confirmed Cases: {countries.data[index].NewConfirmed}</h2>
            <h2>New Recovered: {countries.data[index].NewRecovered}</h2>
            <h2>Total Deaths: {countries.data[index].TotalDeath}</h2>
            <h2>New Deaths: {countries.data[index].NewDeath}</h2>
          </div> : <h1>***Loading***</h1>}
      </div>
    </>
  )
}

export default Details