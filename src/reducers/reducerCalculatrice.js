import { ADD_INPUT, ADD_RESULT, CLEAR_INPUT, ADD_TO_HISTORY } from '../actions/actionCalculatrice';

const initialState = {
  input: '',
  result: 0,
  history: []
};

export default function calculatorReducer(state = initialState, action) {
  let newResult = 0;

  switch (action.type) {
    case ADD_INPUT:
      const newInput = state.input + action.payload;
      newResult = state.result;
      try {
        newResult = eval(newInput);
        if (!Number.isFinite(newResult)) {
            newResult = 'Infinity or NaN';
          }
        } catch (error) {
            newResult = '';
        }
      return {
        input: newInput,
        result: newResult,
        history: state.history
      };

    case CLEAR_INPUT:
      return {
        input: '',
        result: 0,
        history: []
      };

      case ADD_RESULT:
        newResult = state.result;
        try {
          newResult = eval(state.input);
          if (!Number.isFinite(newResult)) {
            newResult = 'Infinity or NaN';
          }
        } catch (error) {
          newResult = '';
        }
        
        const historyEntry = {
          expression: state.input,
          result: newResult
        };
        
        return {
          input: newResult.toString(),
          result: newResult,
          history: [...state.history, historyEntry]
        };
  
      // case ADD_TO_HISTORY:
      //   return {
      //     ...state,
      //     history: [...state.history, action.payload]
      //   };
  

    default:
      return state;
  }
}
