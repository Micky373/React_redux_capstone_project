import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Details from '../Details';
import store from '../../redux/configureStore';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../../redux/covidData/covidData.js');
const element = (
  <Provider store={store}>
    <HashRouter>
      <Details />
    </HashRouter>
  </Provider>
);

it('it works', () => {
  const tree = renderer.create(element).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render check', () => {
  render(element);
  const dataRender = screen.getByText('COVID cases per country');
  expect(dataRender).toBeInTheDocument();
});
