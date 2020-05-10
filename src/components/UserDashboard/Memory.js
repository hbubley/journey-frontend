import React, {useContext} from 'react'
import StepContext from '../../context/user-steps/stepContext'

export default function Memory() {
    const stepContext = useContext(StepContext);
    const { steps } = stepContext;
    let randomProud = "being here, in a place of growth"
    //ideally move this into it's own folder
    function randomNumber(min, max) {  
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }  
    let rn = randomNumber(0, steps.length)
    if(steps[rn].proud){
        randomProud = steps[rn].proud
    }
    return (
        <div className='memory-container'>
            <h1>Remember when you were so proud of yourself for...{randomProud}</h1>
        </div>
    )
}
