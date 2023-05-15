export const ADD_INPUT = 'ADD_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const ADD_RESULT = 'ADD_RESULT';
export const CLEAR_ALL_LAST_INPUT='CLEAR_ALL_LAST_INPUT';
// export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export function addInput(input) {
    return {
        type: ADD_INPUT,
        payload: input,
    };
}

export function clearInput() {
    return {
        type: CLEAR_INPUT,
    };
}

export function addResult() {
    return {
        type: ADD_RESULT,
    };
 }


 export function clearAllLastInput() {
    return {
        type: CLEAR_ALL_LAST_INPUT,
    };
 }
// export function addToHistory(expression, result) {
//     return {
//       type: ADD_TO_HISTORY,
//       payload: { expression, result }
//     };
//   }