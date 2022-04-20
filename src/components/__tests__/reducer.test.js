import reducer from '../../redux/covidData/covidData';

const mockStore = {
  data: {
    ID: '1',
    CountryName: 'Ethiopia',
    Date: '20-04-2022',
    TotalConfirmed: '170000',
    NewConfirmed: '20',
    NewRecovered: '100',
    TotalDeath: '110',
    NewDeath: '0',
  },
  loading: false,
};

describe('Reducer test', () => {
  it('Initial state', () => {
    expect(reducer([], {})).toEqual([]);
  });

  it('Reduces well when given an action', () => {
    const FETCH_SUCCESS = 'FETCH_SUCCESS';
    const action = {
      type: FETCH_SUCCESS,
      payload: {
        ID: '1',
        CountryName: 'Ethiopia',
        Date: '20-04-2022',
        TotalConfirmed: '170000',
        NewConfirmed: '20',
        NewRecovered: '100',
        TotalDeath: '110',
        NewDeath: '0',
      },
    };
    expect(reducer([], action)).toEqual(mockStore);
  });
});
