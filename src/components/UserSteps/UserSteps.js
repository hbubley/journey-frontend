import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import UserStep from './UserStep'
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
          <UserStep step={step} key={step._id}/>
      ))}
    </div>
  );
  }else{return <h1>Loading</h1>}
}
