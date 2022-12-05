import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

registerServiceWorker();
