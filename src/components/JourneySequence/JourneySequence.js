import React, {useState} from 'react'
import Breathe from './Breathe'
import JourneyButtons from './JourneyButtons.js'
import prompts from './prompts.json'
import './Sequence.scss'

export default function JourneySequence() {
//    const [sequenceIndex, setSequenceIndex] = useState(0)
//     switch (sequenceIndex) {
//         case 0:
//             return <Breathe prompts={prompts.breathe} />
//     }
    return (
        <div className="sequence-container">
           <Breathe prompts={prompts.breathe}/>
           <JourneyButtons />
        </div>
    )
}
