import { ADD_INPUT, CLEAR_INPUT } from '../actions/actionCalculatrice';

const initialState = {
  input: '',
  result: 0
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INPUT:
      const newInput = state.input + action.payload;
      let newResult = state.result;
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
        result: newResult
      };

    case CLEAR_INPUT:
      return {
        input: '',
        result: 0
      };

    default:
      return state;
  }
}
