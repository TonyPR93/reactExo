import { ADD_INPUT, ADD_RESULT, CLEAR_ALL_LAST_INPUT, CLEAR_INPUT} from '../actions/actionCalculatrice';

const initialState = {
  input: '',
  result: 0,
  history: []
};

export default function calculatorReducer(state = initialState, action) {
  let newResult = 0;
  let newInput = '';

  switch (action.type) {
    case ADD_INPUT:
      newInput = state.input + action.payload;
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
      
      case CLEAR_ALL_LAST_INPUT:
        // Trouver l'index du dernier symbole dans l'input
        const lastSymbolIndex = Math.max(
          state.input.lastIndexOf('+'),
          state.input.lastIndexOf('-'),
          state.input.lastIndexOf('*'),
          state.input.lastIndexOf('/')
        );
        // Extraire l'input jusqu'au dernier symbole
        newInput = state.input.substring(0, lastSymbolIndex);
        return {
          ...state,
          input: newInput
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
