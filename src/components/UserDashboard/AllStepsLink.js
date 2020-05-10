import React from 'react'
import { Link } from 'react-router-dom'

export default function AllStepsLink() {
    return (
        <div className="all-steps-link">
            <Link to="/steps"><h1>All My Steps</h1></Link>
        </div>
    )
}
