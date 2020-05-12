import React, {useContext} from 'react'
import AuthContext from '../../context/auth/authContext'

export default function DashHeader() {
const authContext =  useContext(AuthContext)
const { user } = authContext;
if(user){
    console.log(user)
    return (
        <div className='dash-header'>
            <h1>We're so happy you're here, {user.name}</h1>
            <h2>Let us know when you're ready to begin your journey today</h2>
        </div>
    )
}else{ return <h1>loading</h1>}   }
