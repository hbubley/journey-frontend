import React, { useContext, useEffect } from "react";
import StepContext from "../../context/user-steps/stepContext";
import "./Steps.scss";
export default function Step({ step }) {
  const stepContext = useContext(StepContext);
  const { steps, loading } = stepContext;

  if (steps !== null && !loading) {
    return (
      <div className="step-container">
        <h1>
          <span>Feeling:</span> {step.feeling_now ? step.feeling_now : "Empty"}
        </h1>
        <h1>
          <span>Thoughts:</span> {step.thoughts ? step.thoughts : "Empty"}
        </h1>
        <h1>
          <span>Good thing:</span> {step.good_thing ? step.good_thing : "Empty"}
        </h1>
        <h1>
          <span>Proud moment:</span> {step.feeling_now ? step.feeling_now : "Empty"}
        </h1>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
