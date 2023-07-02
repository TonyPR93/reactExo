export const INIT = "INIT";
export const RESET ="RESET";
export const UPDATE_TXT = "UPDATE_TXT"

export function updateText(value) {
    return {
        type: UPDATE_TXT,
        payload: value
    };
}

export function inite() {
    return {
        type: INIT
    };
}

export function reset(){
    return{
        type : RESET
    };
}