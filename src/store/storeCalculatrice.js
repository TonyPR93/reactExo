import { createStore, combineReducers } from 'redux';
import reducerCalculatrice from '../reducers/reducerCalculatrice';
import reducerExplication from '../reducers/reducerExplication'

import reducerRandomQuote from '../reducers/reducerRandomQuote'
const rootReducers = combineReducers({
    calculatrice: reducerCalculatrice,
    explication: reducerExplication,
    randomQuote: reducerRandomQuote
})

const store = createStore(rootReducers);

export default store;
