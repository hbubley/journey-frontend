import React, {useContext} from 'react'
import StepContext from '../../context/user-steps/stepContext'
import AuthContext from '../../context/auth/authContext'

export default function Memory() {
    const stepContext = useContext(StepContext);
    const { steps, loading } = stepContext;
    let randomProud = "being here, in a place of growth"
    //ideally move this into it's own folder
    
    // if( steps && steps.length && !loading){
    //     function randomNumber(min, max) {  
    //         min = Math.ceil(min); 
    //         max = Math.floor(max); 
    //         return Math.floor(Math.random() * (max - min + 1)) + min; 
    //     }  
    //     let rn = randomNumber(0, steps.length)
        
    //     randomProud = steps[rn]
    // }
    return (
        <div className='memory-container'>
           <h1>Be proud of yourself for being here, in a place of growth</h1>
        </div>
        
    )
}
