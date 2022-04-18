import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './redux/covidData/covidData';
import HomePage from './components/HomePage';
import Details from './components/Details';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Details/:country" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
