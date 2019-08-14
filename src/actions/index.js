export const ADD_FEATURES = 'ADD_FEATURES';

export function addFeatures(addedFeature){
    return {
        type: ADD_FEATURES,
        payload: addedFeature
    }
}