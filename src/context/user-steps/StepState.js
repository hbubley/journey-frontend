import React, { useReducer } from "react";
import axios from 'axios'
import StepContext from "./stepContext";
import stepReducer from "./stepReducer";
import {
  GET_STEPS,
  CLEAR_STEPS,
  ADD_STEP,
  DELETE_STEP,
  SET_CURRENT,
  CLEAR_CURRENT,
  STEP_ERROR,
} from "../types";

const StepState = (props) => {
  const initialState = {
    loading: true,
    steps: null,
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(stepReducer, initialState);

//Get all steps
const getSteps = async () => {
  try {
    const res = await axios.get("http://intense-basin-33436.herokuapp.com/api/entries");
    dispatch({
      type: GET_STEPS,
      payload: res.data
    });
  } catch (err) {
    console.log("IN CATCH ERROR GET ALL STEPS -", err.response)
    dispatch({
      type: STEP_ERROR,
      payload: err.response.data.msg
    });
  }
};

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
        payload: res.data
      });
    } catch (err) {
      console.log("IN CATCH ERROR ADD STEP -", err.response)
      dispatch({
        type: STEP_ERROR,
        payload: err.response.data.msg,
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
        error: state.error,
        getSteps
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};
export default StepState;
