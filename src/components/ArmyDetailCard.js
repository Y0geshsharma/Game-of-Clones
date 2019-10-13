import React from 'react';


export default function ArmyDetailCard({delay,data,color}){


    return(
<div class="flip-card" style={{animationDelay:delay+'s'}}>
  <div class="flip-card-inner">
    <div class="flip-card-front"  style={{background:color}}>
      {data["image"]}
    </div>
    <div class="flip-card-back">
      <h2>{data['Kind']}</h2> 
      <h6>{data['Description']}</h6> 
      <div className='traits'>
          <ul>
            <li>Strength:{data['Strength']}</li> 
            <li>Agility:{data['Agility']}</li> 
            <li>Intellignce:{data['Intelligence']}</li> 
          </ul>
          <ul>
              {data["Terrain"].split(',').map(d=><li style={{background:color}}>{d}</li>)}
          </ul>
      </div>
    
    </div>
  </div>
</div>

    )
}