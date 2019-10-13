import React,{useState} from 'react';
import { Layout, Row,Col } from 'antd';
import {armies} from '../data/Details'
import BattleCards from '../components/BattleCards';

const types=['droid army','clone trooper']
const props={style:{cursor:'pointer',position:'fixed',top:'20px',left:'20px'},size:40,color:'#fff'}

export default function Battle({history}) {
    const droid=armies.filter(a=>a['Type']===types[0])
    const troopers=armies.filter(a=>a['Type']===types[1])
    
    return(
        <React.Fragment>
            <Layout className='battleground'>
                <Row className='main-battle'>
                    <Col className='droid-side'>
                        {droid.map((v,i)=>
                            <BattleCards num={parseInt(Math.random()*100)} data={v} delay={i/10}/>
                        )}
                    </Col>
                    <Col  className='trooper-side'>
                        {troopers.map((v,i)=>
                            <BattleCards num={parseInt(Math.random()*50)} color='blue' data={v} delay={i/10}/>
                            )}
                    </Col>
                </Row>
                <button onClick={()=>{
                    history.push('/result')
                }}>Start Battle</button>
            </Layout>
        </React.Fragment>
    )
}