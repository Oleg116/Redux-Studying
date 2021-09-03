import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './counterData/reducer';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const reducers = combineReducers({
  rootReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware()));
export default store;
