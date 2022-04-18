import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/configureStore";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)