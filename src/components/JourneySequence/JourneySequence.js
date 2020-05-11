import React, {useState} from 'react'
import Breathe from './Breathe'
import Input from './Input'
import prompts from './prompts.json'
import './Sequence.scss'

export default function JourneySequence() {
   const [sequenceIndex, setSequenceIndex] = useState(0)
  
    return (
        <div className="sequence-container">
           {/* <Breathe prompts={prompts.breathe}/> */}
           <Input prompts={prompts.input_1} />
        </div>
    )
}
