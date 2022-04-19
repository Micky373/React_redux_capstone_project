import { useSelector } from 'react-redux';
import DataRender from './DataRender';

const HomePage = () => {
  const countries = useSelector((state) => state);
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
      <div className="country_link_container">
        {loadingStatus === false
          ? countries.data.map(
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
