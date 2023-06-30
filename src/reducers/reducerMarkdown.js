import {INIT} from '../actions/actionMarkdown'

const initialState = {
    id:0
};
  
const markdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            console.log('Action INIT', state);
            return {
                id: state.id + 1
            };
        default:
            return state;
    }
};

export default markdownReducer;
