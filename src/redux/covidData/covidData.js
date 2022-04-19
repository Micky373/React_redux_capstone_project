import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchCountriesData = () => async (dispatch) => {
  dispatch({
    type: FETCH_REQUEST,
  });
  try {
    const covidApi = await axios.get('https://api.covid19api.com/summary');
    const countries = covidApi.data.Countries;
    const africa = ['Nigeria', 'Ghana', 'Ethiopia', 'Kenya', 'Senegal', 'Cameroon', 'Rwanda', 'Chad', 'Gambia', 'Burundi', 'Sierra Leone', 'Zimbabwe', 'South Africa', 'Morocco', 'Tunisia', 'Zambia', 'Egypt', 'Algeria', 'Uganda', 'Namibia'];
    const payload = [];
    for (let i = 0; i < countries.length; i += 1) {
      if (africa.indexOf(countries[i].Country) !== -1) {
        payload.push({
          ID: countries[i].ID,
          CountryName: countries[i].Country,
          Date: countries[i].Date.split('T')[0],
          TotalConfirmed: countries[i].TotalConfirmed,
          NewConfirmed: countries[i].NewConfirmed,
          NewRecovered: countries[i].NewRecovered,
          TotalDeath: countries[i].TotalDeaths,
          NewDeath: countries[i].NewDeaths,
        });
      }
    }
    dispatch({
      type: FETCH_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAILURE,
      payload: error.message,
    });
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
