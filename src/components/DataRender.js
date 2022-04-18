import React from "react";
import { Link } from "react-router-dom";

const DataRender = ({ id, country }) => (
  <div>
    <Link to={`/Details/:${id}`}>
      <h1>{country}</h1>
    </Link>
  </div>
)

export default DataRender