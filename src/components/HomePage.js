import { useSelector } from 'react-redux';
import DataRender from './DataRender';

const HomePage = () => {
  const countries = useSelector((state) => state);
  const loadingStatus = countries.loading;
  return (
    <div>
      {loadingStatus === false
        ? countries.data.map(
          (country, index) => (
            <DataRender
              id={index}
              country={country.CountryName}
              key={country.ID}
            />
          ),
        ) : <h1>***Loading***</h1>}
    </div>
  );
};

export default HomePage;
