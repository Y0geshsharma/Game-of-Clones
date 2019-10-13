import React from 'react';

export default function BattleCards({data,color='red',delay,num=0}){

    return(
        <React.Fragment>
            <div className='battle-card' style={{animationDelay:delay+'s'}}>
                <div className='army-battle-kind' style={{borderColor:color}}>
                    {data['image']}
                </div>
                <div className='army-battle-count' style={{background:color}}>
                    <p>{data['Kind']}</p>
                    <p>{num}</p>
                </div>
            </div>
        </React.Fragment>
    )
}