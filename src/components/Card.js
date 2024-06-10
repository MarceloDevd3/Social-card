import React from 'react';
import Buttons from './Buttons';
import profile from '../assets/images/avatar-jessica.jpeg'



export default function Card() {
    return (
        <article className='Card--container'>
            <section className='Card--top-infomation'>
               <img src={profile} alt="avatar" id="profile"/>
               <h1 className='card--top--title'>Jessica Randall</h1>
               <h2 className='card--top--subtitle'>London, United Kingdom</h2>
               <p className='card--top--text'>"Front-end developer and avid reader."</p>
            </section>
            <div className='btn--container'>
            <Buttons btnTitle={'GitHub'}/>
            <Buttons btnTitle={'Frontend Mentor'}/>
            <Buttons btnTitle={'LinkedIn'}/>
            <Buttons btnTitle={'Twitter'}/>
            <Buttons btnTitle={'Instagram'}/>
            </div>
        </article>
    )
}

