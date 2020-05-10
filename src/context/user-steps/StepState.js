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
            _id: 1,
            feeling_now: "Nothing, cats don't feel",
            thoughts: "does that mouse I killed have a family",
            good_thing: "Killing that mouse",
            proud_moment: "Killin' that mouse real good",
            user: "5eb5d8732dbbe1416adfa17a",
            date: "2020-05-08T22:12:17.581Z",
            __v: 0
        },
        {
            _id: 1,
            feeling_now: "cool, like a cat",
            thoughts: "Why do dogs exist",
            good_thing: "Found some cheese",
            proud_moment: "Scratched my human's eye ball",
            user: "5eb5d8732dbbe1416adfa17a",
            date: "2020-05-08T22:12:17.581Z",
            __v: 0
        },
        {
            _id: 1,
            feeling_now: "ameowzing",
            thoughts: "Why do I exist",
            good_thing: "Destroyed v expensive cat toy",
            proud_moment: "hit dog's snoot",
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
        <StepContext.Provider
            value={{
                steps: state.steps
            }}
        >
            {props.children}
        </StepContext.Provider>
    )
};
export default StepState;