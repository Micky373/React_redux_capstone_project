import { useDispatch } from "react-redux";
import { fetchCountriesData } from "./redux/covidData/covidData";
import React, { useEffect } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountriesData())
  }, [])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Details/:index" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App