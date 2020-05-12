import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Breathe from "./Breathe";
import Input from "./Input";
import prompts from "./prompts.json";
import StepContext from "../../context/user-steps/stepContext";
import Submit from "./Submit";
import "./Sequence.scss";

export default function JourneySequence() {
  const { addStep } = useContext(StepContext);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [state, setState] = useState({
    feeling_now: "",
    thoughts: "",
    good_thing: "",
    proud_moment: "",
    freespace: "",
  });
  let history = useHistory();

  

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStep(state);
    setState({
      feeling_now: "",
      thoughts: "",
      good_thing: "",
      proud_moment: "",
      freespace: "",
    });
    history.push("/userdash"); 
  };

  const _next = () => {
    setSequenceIndex(sequenceIndex + 1);
  };

  const renderStep = (values) => {
    let renderComponent;

    switch (sequenceIndex) {
      case 0:
        return (renderComponent = (
          <Input
            prompts={prompts.input_1}
            handleChange={handleChange}
            value={state.feeling_now}
          />
        ));
      case 1:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.one_a}
            prompts_b={prompts.breathe.one_b}
          />
        ));
      case 2:
        return (renderComponent = (
          <Input
            prompts={prompts.input_2}
            handleChange={handleChange}
            value={state.thoughts}
          />
        ));
      case 3:
        return (renderComponent = (
          <Breathe
            prompts_a={prompts.breathe.two_a}
            prompts_b={prompts.breathe.two_b}
          />
        ));
      case 4:
        return (renderComponent = (
          <Input
            prompts={prompts.input_3}
            handleChange={handleChange}
            value={state.good_thing}
          />
        ));
      case 5:
        return (renderComponent = (
          <Input
            prompts={prompts.input_4}
            handleChange={handleChange}
            value={state.proud_moment}
          />
        ));
      case 6:
        return (renderComponent = (
          <Input
            prompts={prompts.input_5}
            handleChange={handleChange}
            value={state.freespace}
          />
        ));
      case 7:
        return (renderComponent = (
          <Submit
            prompts={prompts.input_5}
            handleChange={handleChange}
            value={state.freespace}
          />
        ));

      default:
        return (renderComponent = null);
    }
  };

  return (
    <div className="sequence-container">
      <Link to='/userdash' className='dash-link'>Back to Dash</Link>
      <form onSubmit={handleSubmit}>{renderStep(sequenceIndex)}</form>
      <div className="sequence-buttons">
        <button hidden={sequenceIndex === 7} onClick={_next}>Next</button>
        <button hidden={sequenceIndex < 7} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
