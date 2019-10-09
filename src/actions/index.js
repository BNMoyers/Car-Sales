
export const ADD_FEATURE = 'ADD_FEATURE'
export const addExtra = item => {
    return { type: ADD_FEATURE, payload: item}
  };

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeExtra = item => {
    return { type: REMOVE_FEATURE, payload: item}
   };
 
