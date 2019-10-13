import React from 'react';
import ArmyDetailCard from '../components/ArmyDetailCard';
import { Layout, Row } from 'antd';
import {armies} from '../data/Details'
import { IoMdArrowBack } from 'react-icons/io';

const types=['droid army','clone trooper']
const props={style:{cursor:'pointer',position:'fixed',top:'20px',left:'20px'},size:40,color:'#fff'}
export default function ArmyDetails({history}) {
    const {type}=history.location.state
    const color=type===0?'red':'blue'
    return(
        <Layout>
            <Row>
                <div className='army-details-title'>
                    <IoMdArrowBack onClick={()=>history.push('/')} {...props}/>
                    <p style={{textShadow:`0 0 20px ${color}`}}>
                    {types[type].toUpperCase()}</p>
                </div>
            </Row>
<Row>
    <div className='army-details'>
       {armies.filter(a=>a['Type']===types[type]).map((v,i)=>( 
       <ArmyDetailCard color={color} delay={i/3} data={v}/>))}

    </div>
</Row>
        <button className='add-army-btn' style={{background:color}}>ADD {types[type].toUpperCase()}</button>
        </Layout>
   )
}