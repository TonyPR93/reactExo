import {INIT, RESET, UPDATE_TXT} from '../actions/actionMarkdown'

const initialState = {
    text:"test",
    convertedText:''
};
  
const markdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            console.log('Action INIT', state);
            return {
                ...state
            };
        case RESET:
            console.log("reset");
            return{
                ...state
            }
        case UPDATE_TXT:
            console.log("UPDATE_TXT");
            return{
                convertedText : action.payload
            }
        default:
            return state;
    }
};

export default markdownReducer;
