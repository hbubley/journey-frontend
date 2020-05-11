import React, { useReducer } from 'react';
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
    const setAlert(msg, type) => {
        dispatch({
            payload: {msg, type}
        })
    }

    return (
        <AlertContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
};
export default AlertState;