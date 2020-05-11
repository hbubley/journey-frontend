import React, {useContext} from 'react'
import AlertContext from "../../context/alert/alertContext"

export default function Alerts() {
    const alertContext = useContext(AlertContext);
    const {alerts} = alertContext
    console.log(alerts)
    return (
        alerts.length > 0 && alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i>RUH ROH, {alert.msg}</i>
            </div>
        ))
    )
}
