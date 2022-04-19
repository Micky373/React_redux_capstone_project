import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const { country } = params;
  const countries = useSelector((state) => state);
  const covidData = countries.data.filter((data) => data.CountryName === country);
  const countryFlag = `https://countryflagsapi.com/png/${country}`;

  return (
    <>
      <div className="nav_bar">
        <Link to="/"><i className="fa fa-angle-left nav_buttons" aria-hidden="true" /></Link>
        <span className="nav_header">COVID cases per country</span>
        <i className="fa fa-microphone microphone_button" aria-hidden="true" />
        <i className="fa fa-gear nav_buttons" aria-hidden="true" />
      </div>
      <div className="details_container">
        <div>
          <h1 className="description_header">{`${country}'s Covid Data`}</h1>
        </div>
        <img className="country_flag" src={countryFlag} alt="country flag" />
        <div>
          {countries !== undefined
            ? (
              <div className="description_container">
                <span className="description">
                  Country:&nbsp;&nbsp;
                  {covidData[0].CountryName}
                </span>
                <span className="description">
                  Date:&nbsp;&nbsp;
                  {covidData[0].Date}
                </span>
                <span className="description">
                  Total Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].TotalConfirmed}
                </span>
                <span className="description">
                  New Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].NewConfirmed}
                </span>
                <span className="description">
                  New Recovered:&nbsp;&nbsp;
                  {covidData[0].NewRecovered}
                </span>
                <span className="description">
                  Total Deaths:&nbsp;&nbsp;
                  {covidData[0].TotalDeath}
                </span>
                <span className="description">
                  New Deaths:&nbsp;&nbsp;
                  {covidData[0].NewDeath}
                </span>
              </div>
            ) : <h1>***Loading***</h1>}
        </div>
      </div>
    </>
  );
};

export default Details;
