import React, { useState, useContext } from "react";
import Breathe from "./Breathe";
import Input from "./Input";
import prompts from "./prompts.json";
import StepContext from "../../context/user-steps/stepContext";
import Submit from "./Submit"
import "./Sequence.scss";

export default function JourneySequence() {
  const stepContext = useContext(StepContext);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [step, setStep] = useState({
    feeling_now: "",
    thoughts: "",
    good_thing: "",
    proud_moment: "",
    freespace: "",
  });

  //   const { feeling_now, thoughts, good_thing, proud_moment, freespace } = step;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStep({
      [name]: value,
    });
    
    console.log(step)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { feeling_now, thoughts, good_thing, proud_moment, freespace } = step;
  };

  const _next = () => {
    setSequenceIndex(sequenceIndex + 1);
  };

  const renderStep = (values) => {
    let renderComponent;

    switch (sequenceIndex) {
      case 0:
        return (renderComponent = <Input prompts={prompts.input_1} handleChange={handleChange}value={step.feeling_now}/>);
      case 1:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.one_a}
            prompts_b={prompts.breathe.one_b}
          />
        ));
      case 2:
        return (renderComponent = <Input prompts={prompts.input_2} handleChange={handleChange} value={step.thoughts}/>);
      case 3:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.two_a}
            prompts_b={prompts.breathe.two_b}
          />
        ));
      case 4:
        return (renderComponent = <Input prompts={prompts.input_3} handleChange={handleChange} value={step.good_thing}/>);
      case 5:
        return (renderComponent = <Input prompts={prompts.input_4} handleChange={handleChange} value={step.proud_moment} />);
      case 6:
        return (renderComponent = <Input prompts={prompts.input_5} handleChange={handleChange} value={step.freespace} />);
      case 7:
        return (renderComponent = <Submit prompts={prompts.input_5} handleChange={handleChange} value={step.freespace} />);
      
      default:
        return (renderComponent = null);
    }
  };

  return (
    <div className="sequence-container">
    <form>
      {renderStep(sequenceIndex)}
    </form>
      <button onClick={_next}>Next</button>
    </div>
  );
}
