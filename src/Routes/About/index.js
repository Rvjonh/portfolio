import './style.scss';

import useScrollTop from './../../Hooks/useScrollTop';

import Picture from './../../Components/Picture';
import AdaptativeImg from './../../Assets/Strength/Adaptative.png';
import CuriousImg from './../../Assets/Strength/Curious.png';
import MeticulousImg from './../../Assets/Strength/Meticulous.png';

import TechStack from './TechStack';

import MainWrap from './../../Components/MainWrap';
import BounceTitle from './../../Components/BounceTitle';

export default function About(){
    useScrollTop();

    return(
        <MainWrap>
            <AboutSections />
        </MainWrap>
    )
}

export function AboutSections(){
    return(
        <>
        <section className="section">

            <div className='title-header'>
                <h2 href='#about' className="title-section">About</h2>
            </div>

            <div className='characteristics'>
                <Picture srcRef={AdaptativeImg} desc={<strong>Adaptative</strong>} className="img-edited"/>
                <Picture srcRef={CuriousImg} desc={<strong>Curious</strong>} className="img-edited"/>
                <Picture srcRef={MeticulousImg} desc={<strong>Meticulous</strong>} className="img-edited"/>
            </div>

            <div className='medium-box'>
                <p className='text'>
                    I was a child of those who spend a lot of his time in front a 
                    computer doing whatever and starting hacking programs to use 
                    them to optimeze my tasks.
		    I've always felt in love about all the things that we could do 
                    in a computer or a smart device. maybe for that I'm really interested 
                    in information technologies nowadays.
                </p>
                <p className='text'>
                    I started at 17 years to go in the software development world 
		    and I've got a degree related to coumputer science (systems engineer) these days, 
		    where I have adquired a lot of information about creating software, 
		    recibing many practices from my exams and a long my career.
		    I've create projects to show case my knowledge with different technologies.
		    My goal is to become a profident developer to impact people with software.
                </p>
            </div>

            <BounceTitle  text='About me' />


        </section>

        <TechStack />
        </>
    )
}