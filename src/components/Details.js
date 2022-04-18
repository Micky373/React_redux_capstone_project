import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const { country } = params;
  const countries = useSelector((state) => state);
  const covidData = countries.data.filter((data) => data.CountryName === country);
  return (
    <>
      <div>
        <h1>Covid Data</h1>
      </div>
      <div>
        {countries !== undefined
          ? (
            <div>
              <h2>
                Country:
                {covidData[0].CountryName}
              </h2>
              <h2>
                Date:
                {covidData[0].Date}
              </h2>
              <h2>
                Total Confirmed Cases:
                {covidData[0].TotalConfirmed}
              </h2>
              <h2>
                New Confirmed Cases:
                {covidData[0].NewConfirmed}
              </h2>
              <h2>
                New Recovered:
                {covidData[0].NewRecovered}
              </h2>
              <h2>
                Total Deaths:
                {covidData[0].TotalDeath}
              </h2>
              <h2>
                New Deaths:
                {covidData[0].NewDeath}
              </h2>
            </div>
          ) : <h1>***Loading***</h1>}
      </div>
    </>
  );
};

export default Details;
