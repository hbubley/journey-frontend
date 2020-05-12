import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import './Steps.scss'
export default function Steps() {
  const stepContext = useContext(StepContext);
  const { steps, getSteps, loading } = stepContext;

  useEffect(() => {
    getSteps()
  })
  if(steps !== null && !loading){
  return (
    <div className='steps-container'>
      {steps.map((step) => 
      (
        <>
        <h1>{step.date}</h1>
        <h3>{step.feeling_now}</h3>
        </>
      ))}
    </div>
  );
  }else{return <h1>Loading</h1>}
}
