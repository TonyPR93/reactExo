import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducerCalculatrice from '../reducers/reducerCalculatrice';
import reducerExplication from '../reducers/reducerExplication';

import reducerRandomQuote from '../reducers/reducerRandomQuote';

import reducerClock from '../reducers/reducerClock';
const rootReducers = combineReducers({
    calculatrice: reducerCalculatrice,
    explication: reducerExplication,
    randomQuote: reducerRandomQuote,
    clock: reducerClock
})

const store = createStore(rootReducers);

export default store;
