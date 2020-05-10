import React from 'react'
import {Link} from 'react-router-dom'

export default function StartSequence() {
    return (
    <div className="start-link">
        <Link to="/sequence"><h1>Start</h1></Link>
    </div>
    )
}
