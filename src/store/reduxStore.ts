import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
	users: userReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));