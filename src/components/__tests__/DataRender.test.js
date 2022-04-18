import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../../redux/configureStore";
import DataRender from "../DataRender";
import '@testing-library/jest-dom';

jest.mock('../../redux/covidData/covidData.js')
describe('DataRender componenet testing', () => {
  const element = (
    <Provider store={store}>
      <HashRouter>
        <DataRender id={2} country='Ethiopia' />
      </HashRouter>
    </Provider>
  )

  test('DataRender snapshot', () => {
    const dataRender = renderer.create(element)
    expect(dataRender).toMatchSnapshot()
  })

  test('Render check', () => {
    render(element)
    const dataRender = screen.getByText('Ethiopia')
    expect(dataRender).toBeInTheDocument()
  })
})