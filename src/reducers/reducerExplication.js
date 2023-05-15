// explicationReducer.js
import { TOGGLE_SECTION } from '../actions/actionAccordeon'

const initialState = {
    expandedSections: []
  };
  
  const explicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_SECTION:
        const sectionIndex = state.expandedSections.indexOf(action.payload);
        const expandedSections = [...state.expandedSections];
  
        if (sectionIndex > -1) {
          expandedSections.splice(sectionIndex, 1);
        } else {
          expandedSections.push(action.payload);
        }
  
        return {
          ...state,
          expandedSections
        };
  
      default:
        return state;
    }
  };
  
  export default explicationReducer;
  