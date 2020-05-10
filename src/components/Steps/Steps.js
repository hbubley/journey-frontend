import React, { useContext } from "react";
import StepContext from "../../context/user-steps/stepContext";
export default function Steps() {
  const stepContext = useContext(StepContext);
  const { steps } = stepContext;
  return (
    <div>
      {steps.map((step) => (
        <h3>{step.good}</h3>
      ))}
    </div>
  );
}
