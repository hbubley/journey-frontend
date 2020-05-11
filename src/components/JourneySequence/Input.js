import React, {useState, useContext} from "react";
import StepContext from '../../context/user-steps/stepContext'


export default function Input({ prompts }) {
    const stepContext = useContext(StepContext)
    // const [step, setStep] = useState({
    //     feeling_now: "",
    //     thoughts: "",
    //     good_thing: '',
    //     proud_moment: '',
    //     freespace: ''
    // })

    // const {feeling_now, thoughts, good_thing, proud_moment, freespace} = step;

    // const onChange = e => setStep({ ...step, [e.target.name]: e.target.value });

  return (
    <div className="prompts">
      <h1>{prompts.question}</h1>
      <div className="input-container">
        <input
          id={prompts.input_key}
          name={prompts.input_key}
          type="text"
          placeholder={prompts.placeholder}
          //   value=
          //   onChange=
        />
      </div>
    </div>
  );
}
