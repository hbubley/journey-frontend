import React from 'react'

export default function Breathe({prompts}) {
    return (
        <div className='prompts'>
            <h1>{prompts.one_a}</h1>
            <h2>{prompts.one_b}</h2>
        <div className='breathing-container'>
           <img src="https://res.cloudinary.com/dum4u7sro/image/upload/v1589129452/icons_Journey_App_-_Desktop_8_hhspvj.png" alt='breathing-animation'/>
        </div>
        </div>
    )
}
