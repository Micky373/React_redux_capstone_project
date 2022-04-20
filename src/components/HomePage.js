import { useState } from 'react';
import { useSelector } from 'react-redux';
import DataRender from './DataRender';

const searchDisplayStyle = {
  marginBottom: '1rem',
  fontSize: '2rem',
};

const HomePage = () => {
  const countries = useSelector((state) => state);
  const [searchItem, setSearchItem] = useState('');
  const loadingStatus = countries.loading;
  return (
    <div>
      <div className="nav_bar">
        <span className="nav_header">Top 20 African countries COVID cases</span>
        <i className="fa fa-microphone microphone_button" aria-hidden="true" />
        <i className="fa fa-gear nav_buttons" aria-hidden="true" />
      </div>
      <div className="image_wrapper">
        <div className="image_container" />
      </div>
      <p className="search_item_container">
        <div style={searchDisplayStyle}>Search</div>
        <div>
          <input
            value={searchItem}
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search by country"
          />
        </div>
      </p>
      <div className="country_link_container">
        {loadingStatus === false
          ? countries.data
            .filter(
              (country) => country.CountryName.toLowerCase().includes(searchItem.toLowerCase()),
            )
            .map(
              (country) => (
                <>
                  <DataRender
                    country={country.CountryName}
                    key={country.ID}
                    total={country.TotalConfirmed}
                  />
                </>
              ),
            ) : <h1>***Loading***</h1>}
      </div>
    </div>
  );
};

export default HomePage;
