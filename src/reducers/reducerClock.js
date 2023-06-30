import {ADD_TIME_TO_SESSION_TIME,ADD_TIME_TO_BREAK_TIME,SUBTRACT_TIME_TO_SESSION_TIME,SUBTRACT_TIME_TO_BREAK_TIME, CLEAR_TIME,START_TIME,STOP_TIME,TICK} from '../actions/actionClock';

//import { dispatch } from 'redux';

let sessionTime = 25;

const initialState = {
    timeLeft: sessionTime,//le temps qui apparait au chrono
    started: false, //Chrono lancé ou pas (regarder la fonction tick())
    breakTime: 5,
    sessionTime: 25,
    isSession: true //Permet de voir si session d'entrainment ou break
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TIME_TO_SESSION_TIME:
            console.log(state.sessionTime)
            console.log(action)
            // ... Traitement pour l'action 1 et mise à jour de l'état ...
            return {
                ...state,
                sessionTime: state.sessionTime +1,
                timeLeft : state.sessionTime +1
            // ... Mise à jour de l'état pour l'action 1 ...
            };

        case ADD_TIME_TO_BREAK_TIME:
            console.log(state.sessionTime)
            console.log(action)
            // ... Traitement pour l'action 1 et mise à jour de l'état ...
            return {
                ...state,
                breakTime: state.breakTime +1
            };

        case SUBTRACT_TIME_TO_SESSION_TIME:
            console.log(state)
            console.log(action)
            // ... Traitement pour l'action 1 et mise à jour de l'état ...
            return {
                ...state,
                sessionTime: state.sessionTime -1,
                timeLeft : state.sessionTime -1
            // ... Mise à jour de l'état pour l'action 1 ...
            };

        case SUBTRACT_TIME_TO_BREAK_TIME:
            console.log(state)
            console.log(action)
            // ... Traitement pour l'action 1 et mise à jour de l'état ...
            return {
                ...state,
                breakTime: state.breakTime -1
            // ... Mise à jour de l'état pour l'action 1 ...
            };

        case CLEAR_TIME:
            console.log(state)
            console.log(action)
            return {
                ...initialState
            // ... Mise à jour de l'état pour l'action 2 ...
            };

        case START_TIME:
            console.log(state)
            console.log(action)
            return {
                ...state,
                started: true
            };
        case STOP_TIME:
            console.log(state)
            console.log(action)
            return {
                ...state,
                started:false
            };
        case TICK:
            console.log(state)
            console.log(action)
            if (state.timeLeft === 0) {
                if (state.isSession) {
                    // Si c'était la fin du temps de session, bascule vers le temps de pause
                    return {
                        ...state,
                        isSession: false,
                        timeLeft: state.breakTime,
                    };
                } else {
                    // Si c'était la fin du temps de pause, bascule vers le temps de session
                    return {
                        ...state,
                        isSession: true,
                        timeLeft: state.sessionTime,
                    };
                }
            } else {
                return {
                    ...state,
                    timeLeft: state.timeLeft - 1,
                };
            }  
            
        default:
            return state;
    }
  };
  
  export default rootReducer;