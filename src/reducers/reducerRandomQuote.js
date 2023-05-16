import { SET_RANDOM_QUOTE } from '../actions/actionRandomQuote'

const initialState = {
    id:0,
    quote: '',
    author: ''
  };
  
  const randomQuoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_RANDOM_QUOTE:
        console.log('Action SET_RANDOM_QUOTE:', action.payload);
        console.log('Action SET_RANDOM_QUOTE:', action.payload.id);
        return {
          id: action.payload.id,
          quote: action.payload.quote,
          author: action.payload.auteur
        };
      default:
        return state;
    }
  };

  export default randomQuoteReducer;