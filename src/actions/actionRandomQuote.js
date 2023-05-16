import citationsData from '../json/randomQuote.json';

export const SET_RANDOM_QUOTE ="SET_RANDOM_QUOTE"
export const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * citationsData.citations.length);
    const randomQuote = citationsData.citations[randomIndex];
  
    return {
      type: SET_RANDOM_QUOTE,
      payload: randomQuote
    };
  };
  
  // reducer.js
