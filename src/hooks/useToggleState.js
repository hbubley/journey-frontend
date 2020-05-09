import { useState } from "react";

export default function(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
    if(state === true){
        
    }
  };
  return [state, toggle];
}
