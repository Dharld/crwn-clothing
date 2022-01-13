import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import storeAndPersistor from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeAndPersistor()

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
