import React, { useReducer } from "react";
import axios from 'axios'
import StepContext from "./stepContext";
import stepReducer from "./stepReducer";
import {
  ADD_STEP,
  DELETE_STEP,
  SET_CURRENT,
  CLEAR_CURRENT,
  STEP_ERROR,
} from "../types";

const StepState = (props) => {
  const initialState = {
    //Fakies for now ;)
    steps: [],
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(stepReducer, initialState);
  //Add step entry
  const addStep = async (entry) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("http://intense-basin-33436.herokuapp.com/api/entries", entry, config);
      dispatch({
        type: ADD_STEP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: STEP_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Delete step entry

  //set current entry

  //clear current entry

  return (
    <StepContext.Provider
      value={{
        steps: state.steps,
        addStep,
        error: state.error
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};
export default StepState;
