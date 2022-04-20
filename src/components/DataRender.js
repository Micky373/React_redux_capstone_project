import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataRender = ({ country, total }) => (
  <Link className="country_link" to={`/Details/${country}`}>
    <i className="fa fa-arrow-circle-right next_icon" aria-hidden="true" />
    <span className="country_name">
      <p>{country}</p>
      <p>{total}</p>
    </span>
  </Link>
);

DataRender.propTypes = {
  country: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default DataRender;
