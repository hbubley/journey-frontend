import React, { useState, useContext } from "react";
import Breathe from "./Breathe";
import Input from "./Input";
import prompts from "./prompts.json";
import StepContext from "../../context/user-steps/stepContext";
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { feeling_now, thoughts, good_thing, proud_moment, freespace } = step;
  };

  const _next = () => {
    setSequenceIndex(sequenceIndex + 1);
  };

  const _prev = () => {
    setSequenceIndex(sequenceIndex - 1);
  };

  const renderStep = (values) => {
    let renderComponent;

    switch (sequenceIndex) {
      case 0:
        return (renderComponent = <Input prompts={prompts.input_1} />);
      case 1:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.one_a}
            prompts_b={prompts.breathe.one_b}
          />
        ));
      case 2:
        return (renderComponent = <Input prompts={prompts.input_2} />);
      case 3:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.two_a}
            prompts_b={prompts.breathe.two_b}
          />
        ));
      case 4:
        return (renderComponent = <Input prompts={prompts.input_3} />);
      case 5:
        return (renderComponent = <Input prompts={prompts.input_4} />);
      case 6:
        return (renderComponent = <Input prompts={prompts.input_5} />);

      default:
        return (renderComponent = null);
    }
  };

  return (
    <div className="sequence-container">
      {renderStep(sequenceIndex)}
    </div>
  );
}
