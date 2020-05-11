import React, { useReducer } from 'react';
import uuid from 'uuid'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
 const initialState = [];
    const [state, dispatch] = useReducer(alertReducer, initialState);
 
    //Set alert
    const setAlert(msg, type, timeout = 5000) => {
        const id = uuid.v4();
        dispatch({
            payload: {msg, type, id }
        })

        setTimeout(() => sipatch({ type: REMOVE_ALERT, payload: id }), timeout)
    }

    return (
        <AlertContext.Provider
            value={{
               alerts: state
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
};
export default AlertState;