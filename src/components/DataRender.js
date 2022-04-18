import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataRender = ({ country }) => (
  <>
    <Link to={`/Details/${country}`}>
      <p>{country}</p>
    </Link>
  </>
);

DataRender.propTypes = {
  country: PropTypes.string.isRequired,
};

export default DataRender;
