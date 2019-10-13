import React from 'react';
import { Layout,Button } from 'antd'
import ArmyCard from '../components/ArmyCard';

export default function Home({history}) {
    return(
   <React.Fragment>
       <Layout className='home'>
        <p className='title'>Game of Clones</p>
        {/* <Header/> */}
        <div className='main'>  
            <ArmyCard 
            onClick={()=>history.push('/details',{type:0})} 
            type='Droid' 
            image={<img src={require('../assets/images/droid army/soliders.png')} />}
            color='red'
            />
            <div className='battle-btn' onClick={()=>history.push('/battle')}><p>New Battle</p></div>
            <ArmyCard 
            onClick={()=>history.push('/details',{type:1})} 
            type='Troopers' 
            image={<img src={require('../assets/images/Troopers/Grand_army_formation.jpg')} />}
            color='blue'
            />
        </div>
       </Layout>
   </React.Fragment>
        )
}