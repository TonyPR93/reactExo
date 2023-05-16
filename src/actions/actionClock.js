export const ADD_TIME_TO_SESSION_TIME = 'ADD_TIME_TO_SESSION_TIME';
export const ADD_TIME_TO_BREAK_TIME = 'ADD_TIME_TO_BREAK_TIME';
export const SUBTRACT_TIME_TO_SESSION_TIME = 'SUBTRACT_TIME_TO_SESSION_TIME';
export const SUBTRACT_TIME_TO_BREAK_TIME = 'SUBTRACT_TIME_TO_BREAK_TIME';
export const CLEAR_TIME = 'CLEAR_TIME';
export const START_TIME= "START_TIME";
export const STOP_TIME= "STOP_TIME";
export const TICK = "TICK";

export function addTimeToSessionTime() {
    return {
        type: ADD_TIME_TO_SESSION_TIME
    };
}

export function addTimeToBreakTime() {
    return {
        type: ADD_TIME_TO_BREAK_TIME
    };
}

export function subtractTimeToSessionTime() {
    return {
        type: SUBTRACT_TIME_TO_SESSION_TIME
    };
}

export function subtractTimeToBreakTime() {
    return {
        type: SUBTRACT_TIME_TO_BREAK_TIME
    };
}

export function clearTime() {
    return {
        type: CLEAR_TIME,
    };
}

export function startTime(){
    return {
        type: START_TIME,
    };
}

  export function stopTime(){
    return {
        type: STOP_TIME,
    };
}

export function tick(){
    return {
        type: TICK,
    };
}
