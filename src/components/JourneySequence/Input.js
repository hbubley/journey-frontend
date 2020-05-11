import React, {useState, useContext} from "react";



export default function Input({ prompts }) {

  return (
    <div className="prompts">
      <h1>{prompts.question}</h1>
      <div className="input-container">
        <input
          id={prompts.input_key}
          name={prompts.input_key}
          type="text"
          placeholder={prompts.placeholder}
          value={prompts.input_key}
          //   onChange=
        />
      </div>
    </div>
  );
}
