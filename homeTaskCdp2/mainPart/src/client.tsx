import React from 'react';

// eslint-disable-next-line import/extensions
import '../wdyr';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store';
import { sagaMiddleware } from './store/middlewares';
import rootSaga from './modules';

sagaMiddleware.run(rootSaga);

ReactDOM.hydrate(
  <ErrorBoundary>
    {/* @ts-ignore */}
    <App Router={BrowserRouter} store={store} />
  </ErrorBoundary>,
  document.getElementById('root')
);
