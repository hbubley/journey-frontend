import React from "react";
import WelcomeInitialContent from "./WelcomeInitialContent";
import Login from "./Login";
import Register from "./Register";
import { Route } from "react-router-dom";

export default function WelcomeDisplay() {
  let isLoggingIn = false;
  let isRegistering = false;
  return (
    <div className="welcome-container">
      {isLoggingIn ? (
        <Login />
      ) : isRegistering ? (
        <Register />
      ) : (
        <WelcomeInitialContent />
      )}
    </div>
  );
}
