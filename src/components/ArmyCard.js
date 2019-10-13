import React from 'react'


export default function ArmyCard({type='',image,onClick=()=>{},color}){
    return(
<div className='army-card' style={{borderColor:color}} onClick={onClick}>
        {image}
        <p style={{color}}className='title'>{type}</p>
        <div className='mask' style={{background:color}}/>
    </div>
    )
}