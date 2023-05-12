export const ADD_INPUT = 'ADD_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';

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

