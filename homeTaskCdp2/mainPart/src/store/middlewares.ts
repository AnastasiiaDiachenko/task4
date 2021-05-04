import createSagaMiddleware from 'redux-saga';
import { compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
// eslint-disable-next-line import/no-mutable-exports
let composeTools = compose;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');

  middlewares.push(logger);
  // @ts-ignore
  composeTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

middlewares.push(sagaMiddleware);

export { middlewares, sagaMiddleware, composeTools };
