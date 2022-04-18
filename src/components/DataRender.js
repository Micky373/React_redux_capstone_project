import React from "react";
import { Link } from "react-router-dom";

const DataRender = ({ id, country }) => (
  <>
    <Link to={`/Details/${id}`}>
      <p>{country}</p>
    </Link>
  </>
)

export default DataRender