import React, {useContext} from 'react'
import StepContext from '../../context/user-steps/stepContext'

export default function Memory() {
    const stepContext = useContext(StepContext);
    const { steps } = stepContext;

    function randomNumber(min, max) {  
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }  
    let rn = randomNumber(0, steps.length)
    let randomProud = steps[2].proud
    console.log(randomProud)

    return (
        <div>
            <h1>Remember when you were so proud of yourself for...{randomProud}</h1>
        </div>
    )
}
