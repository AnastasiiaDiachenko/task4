import {
  createStore, applyMiddleware, combineReducers
} from 'redux';
import sortingReducer from './modules/Sorting/reducer';
import filmsReducer from './modules/Main/reducer';
import { middlewares, sagaMiddleware, composeTools } from './store/middlewares';
import rootSaga from './modules';

const appReduser = combineReducers({
  films: filmsReducer,
  sorting: sortingReducer
});

const store = composeTools(applyMiddleware(...middlewares))(createStore)(appReduser);

sagaMiddleware.run(rootSaga);

export default store;
