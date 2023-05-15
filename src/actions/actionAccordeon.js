export const TOGGLE_SECTION = "TOGGLE_SECTION";

export const toggleSection = (sectionIndex) => {
    return {
      type: TOGGLE_SECTION,
      payload: sectionIndex
    };
  };