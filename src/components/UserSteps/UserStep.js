import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import './Steps.scss'
export default function Step({step}) {
  const stepContext = useContext(StepContext);
  const { steps, loading } = stepContext;

  if(steps !== null && !loading){
  return (
    <div className='step-container'>
        <h1>{step.date}</h1>
        <h2>{step.feeling_now}</h2>
      
    </div>
  );
  }else{return <h1>Loading</h1>}
}
