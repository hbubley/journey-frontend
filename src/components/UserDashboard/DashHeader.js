import React, {useContext} from 'react'
import AuthContext from '../../context/auth/authContext'

export default function DashHeader() {
const authContext =  useContext(AuthContext)
const { user } = authContext;
if(user){
    console.log(user)
    return (
        <div className='dash-header'>
            <h1>So happy to have you, {user.name}</h1>
            <h2>Hit start to take a new step</h2>
        </div>
    )
}else{ return <h1>loading</h1>}   }
