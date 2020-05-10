import React, { useContext } from "react";
import StepContext from "../../context/user-steps/stepContext";
import './Steps.scss'
export default function Steps() {
  const stepContext = useContext(StepContext);
  const { steps } = stepContext;
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
}
