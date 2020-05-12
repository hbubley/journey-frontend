import React, {useContext, useEffect} from "react";
import Memory from "./Memory";
import StepCount from "./StepCount";
import AllStepsLink from "./AllStepsLink";
import DashHeader from "./DashHeader";
import "./UserDashboard.scss";
import StepContext from "../../context/user-steps/stepContext";
import StartSequence from "./StartSequence";

export default function UserDashboard() {
  const stepContext = useContext(StepContext);
  const { steps, loading, getSteps } = stepContext;
  useEffect(() => {
    getSteps();
  }, []);
  

  return (
    <div className="dashboard-container">
      {steps !== null && !loading ? (
        <>
          <DashHeader />
          <StartSequence />
          <Memory />
          <StepCount />
          <AllStepsLink />
        </>
      ) : (
        <h1>LOADING</h1>
      )}
    </div>
  );
}
