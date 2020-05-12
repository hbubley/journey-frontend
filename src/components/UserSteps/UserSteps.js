import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import UserStep from './UserStep'
import './Steps.scss'
export default function Steps() {
  const stepContext = useContext(StepContext);
  const { steps, getSteps, loading } = stepContext;
  useEffect(() => {
    getSteps()
  }, [])

  if(steps !== null && steps.length === 0 && !loading){
    return <h1>When you take steps you will see them here</h1>
  }

  return (
    <div className='steps-container'>
      {steps !== null && !loading ? (
      <>
      {steps.map((step) => 
      (
          <UserStep step={step} key={step._id}/>
      ))}
      </>
      ) : (<h1>LOADING</h1>)}
    </div>
  );
}
