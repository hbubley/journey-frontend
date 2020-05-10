import React, {useContext} from 'react'
import StepContext from '../../context/user-steps/stepContext'

export default function StepCount() {
    const stepContext = useContext(StepContext);
    const { steps } = stepContext;
    return (
        <div className='step-count-container'>
            <h1>You've taken <span>{steps.length}</span> steps on your journey</h1>
        </div>
    )
}
