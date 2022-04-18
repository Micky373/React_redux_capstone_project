import React from "react";
import renderer from 'react-test-renderer'
import HomePage from "../HomePage";
import store from '../../redux/configureStore'
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const element = (
  <Provider store={store}>
    <HomePage />
  </Provider>
)

it('it works', () => {
  const tree = renderer.create(element).toJSON();
  expect(tree).toMatchSnapshot();
})

it('Render check', () => {
  render(element)
  const dataRender = screen.getByText('***Loading***')
  expect(dataRender).toBeInTheDocument()
})
