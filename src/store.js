import {createStore} from 'redux';
import contadorReducer from './reducers/contadorReducer';

export const contadorInitialState = { contador: 0 };

const reducer = contadorReducer;

const store = createStore(reducer)

export default store;