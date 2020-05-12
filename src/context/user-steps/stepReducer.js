import {
    ADD_STEP,
    DELETE_STEP,
    SET_CURRENT,
    CLEAR_CURRENT,
    GET_STEPS,
    STEP_ERROR
} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_STEPS:
            return{
            ...state,
            steps: action.payload,
            loading: false
            }
        case ADD_STEP:
            return {
                ...state,
                steps: [...state.steps, action.payload],
                loading: false

            }
        case STEP_ERROR:
            return{
            ...state,
            error: action.payload
        }
        default:
            return state;
    }
}