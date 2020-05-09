import React, { useReducer } from 'react';
import StepContext from './stepContext'
import stepReducer from './stepReducer'
import {
    ADD_STEP,
    DELETE_STEP,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types'

const StepState = props => {
 const initialState = {
     //Fakies for now ;)
     steps: [
        {
            _id: "5eb5d9412dbbe1416adfa17b",
            good: "Getting a backend setup",
            proud: "Of this step example",
            user: "5eb5d8732dbbe1416adfa17a",
            date: "2020-05-08T22:12:17.581Z",
            __v: 0
        },
        {
            _id: "5eb5d9412dbbe1416adfa17b",
            good: "Hopefully not having a broken back end",
            proud: "We shall seee",
            user: "5eb5d8732dbbe1416adfa17a",
            date: "2020-05-08T22:12:17.581Z",
            __v: 0
        },
        {
            _id: "5eb5d9412dbbe1416adfa17b",
            good: "Pizza",
            proud: "not killing dog for eating pizza",
            user: "5eb5d8732dbbe1416adfa17a",
            date: "2020-05-08T22:12:17.581Z",
            __v: 0
        }
     ]
 }
    const [state, dispatch] = useReducer(stepReducer, initialState);
    //Add step entry

    //Delete step entry

    //set current entry

    //clear current entry

    return (
        <StepContext.Provider>
            value={{
                steps: state.steps
            }}
            {props.children}
        </StepContext.Provider>
    )
};
export default StepState;