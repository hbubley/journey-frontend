import React from 'react'


export default function WelcomeInitialContent({toggleIsLoggingIn, toggleIsRegistering}) {
    return (
        <div className="welcome-initial-content">
            <h1>Welcome</h1>
            <button onClick={() => toggleIsLoggingIn()}>Login</button>
            <button onClick={() => toggleIsRegistering()}>Register</button>
        </div>
    )
}
