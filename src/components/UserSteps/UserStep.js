import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import './Steps.scss'
export default function Step() {
  const stepContext = useContext(StepContext);
  const { step, loading } = stepContext;

  if(step !== null && !loading){
  return (
    <div className='step-container'>
        <h1>{step.date}</h1>
        <h2>{step.feeling_now}</h2>
      
    </div>
  );
  }else{return <h1>Loading</h1>}
}
