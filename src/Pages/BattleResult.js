import React ,{useState} from 'react';
import { IoMdHome, IoMdTime } from 'react-icons/io';
import {GiSkullSabertooth,GiDiceEightFacesEight,GiBloodyStash} from 'react-icons/gi';

const props={style:{marginRight:'5px'}}
const getResult=()=>Math.random()>0.5
export default function BattleResult({history}) {
    const res=getResult()
    return(
    <div className='battle-result'>
        <div className='mask' style={{background:res?'blue':'red'}}/>
        <div>
            <img src={require(`../assets/images/${res?'Troopers/41st_Elite_Corps.png':'droid army/Battle_Droids.png'}`)} />
        </div>
        <div className='winner-details'>
        <p className='title'>{res?'Troopers ':'Droid Army '}Won!</p>
        <p className='det'>Total battle points <span><GiDiceEightFacesEight {...props}/>{parseInt(Math.random()*10000)}</span></p>
        <p className='det'>Number of Kills <span><GiSkullSabertooth {...props}/>{parseInt(Math.random()*100)}</span></p>
        <p className='det'>Total Damage <span><GiBloodyStash {...props}/>{parseInt(Math.random()*100000)}</span></p>
           <div className='button-grp'>
                <button onClick={()=>history.push('/')} style={{background:'red'}}> <IoMdTime/> History</button>
                <button onClick={()=>history.push('/')} style={{background:'blue'}}> <IoMdHome/> Home</button>
            </div>
        </div>
    </div>)
}