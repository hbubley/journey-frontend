import {
    ADD_STEP,
    DELETE_STEP,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

export default (state, action) => {
    switch(action.type){
        case ADD_STEP:
            return {
                ...state,
                steps: [...state.steps, action.payload] 
            }
        default:
            return state;
    }
}