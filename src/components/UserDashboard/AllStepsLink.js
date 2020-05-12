import React, {useContext} from 'react'
import StepContext from "../../context/user-steps/stepContext";
import { Link } from 'react-router-dom'

export default function AllStepsLink() {
    const stepContext = useContext(StepContext);
    const { steps } = stepContext;
    return (
        <div className="all-steps-link">
            {steps !== null ? <Link to="/steps"><h1>All My Steps</h1></Link>: <h1>Here is where your steps will be...</h1>}
        </div>
    )
}
