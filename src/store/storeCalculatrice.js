import { createStore } from 'redux';
import inputReducer from '../reducers/reducerCalculatrice';

const store = createStore(inputReducer);

export default store;
