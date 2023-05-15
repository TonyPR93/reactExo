import { createStore, combineReducers } from 'redux';
import reducerCalculatrice from '../reducers/reducerCalculatrice';
import reducerExplication from '../reducers/reducerExplication'

const rootReducers = combineReducers({
    calculatrice: reducerCalculatrice,
    explication: reducerExplication
})

const store = createStore(rootReducers);

export default store;
