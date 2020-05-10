import React, {useState} from 'react'
import Breathe from './Breathe'
import prompts from './prompts.json'
import './Sequence.scss'

export default function JourneySequence() {
   const [sequenceIndex, setSequenceIndex] = useState(0)
  
    return (
        <div className="sequence-container">
           <Breathe prompts={prompts.breathe}/>
        </div>
    )
}
