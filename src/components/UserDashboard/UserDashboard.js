import React from 'react'
import Memory from './Memory'
import StepCount from './StepCount'
import AllStepsLink from './AllStepsLink'
import DashHeader from './DashHeader'
import './UserDashboard.scss'
import StartSequence from './StartSequence'

export default function UserDashboard() {
    return (
        <div className="dashboard-container">
            <DashHeader />
            <StartSequence />
            <Memory />
            <StepCount />
            <AllStepsLink />
        </div>
    )
}
