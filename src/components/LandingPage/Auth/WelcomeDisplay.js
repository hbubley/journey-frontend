import React from "react";
import WelcomeInitialContent from "./WelcomeInitialContent";
import useToggleState from '../../../hooks/useToggleState'
import Login from "./Login";
import Register from "./Register";

export default function WelcomeDisplay() {
  const [isLoggingIn, toggleIsLoggingIn] = useToggleState(false)
  const [isRegistering, toggleIsRegistering] = useToggleState(false)

  return (
    <div className={"welcome-container"}>
      {isLoggingIn ? (
        <Login />
      ) : isRegistering ? (
        <Register />
      ) : (
        <WelcomeInitialContent toggleIsLoggingIn={toggleIsLoggingIn} toggleIsRegistering={toggleIsRegistering} />
      )}
    </div>
  );
}
