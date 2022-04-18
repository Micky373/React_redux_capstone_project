import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataRender = ({ id, country }) => (
  <>
    <Link to={`/Details/${id}`}>
      <p>{country}</p>
    </Link>
  </>
);

DataRender.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default DataRender;
