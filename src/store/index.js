import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const reducers = combineReducers({
  reducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware()));
export default store;
