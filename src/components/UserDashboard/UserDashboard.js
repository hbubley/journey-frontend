import React from 'react'
import Memory from './Memory'
import StepCount from './StepCount'
import AllStepsLink from './AllStepsLink'
import './UserDashboard.scss'

export default function UserDashboard() {
    return (
        <div className="dashboard-container">
            <Memory />
            <StepCount />
            <AllStepsLink />
        </div>
    )
}
