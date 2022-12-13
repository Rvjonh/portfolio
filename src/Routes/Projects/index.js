import './style.scss';

import useScrollTop from './../../Hooks/useScrollTop';
import MainWrap from '../../Components/MainWrap';

import ProjectCard from './../../Components/ProjectCard';
import Card from '../../Components/Card'

import BounceTitle from './../../Components/BounceTitle';

import { experimentals } from './projectsMedia';

export default function Projects(){
    useScrollTop()
    
    return(
        <MainWrap>
            <ProjectsSections />
        </MainWrap>
    )
}

export function ProjectsSections(){
    return(
    <div className='projects-section'>
        <section className='projects-header'>
            <div className='title-header'>
                <h2 href='#about' className="title-section">PROJECTS</h2>

            </div>

            <p className='text text-edited' >
                In this part you can take a look at some of my projects, 
                I have put them a little description and if you like any 
                of them I would like you to send me a message with your 
                thoughts. I look forward to hearing from you. 😉 
            </p>
        </section>

        <BounceTitle  text='Projects' />

        <section className='projects-list'>
            
            <div className='projects-container'>
                <ProjectCard />
                <ProjectCard reversed={true}/>
                <ProjectCard />
                <ProjectCard reversed={true}/>
            </div>

        </section>

        
        <section className='small-projects-list'>

            <div className='title-header'>
                <h2 href='#about' className="title-section">PRACTICES</h2>
            </div>

            <div className='experiments-panel'>
                {experimentals &&
                    experimentals.map((item, index)=>{
                        return(
                            <Card srcRef={item.imgRef} 
                                    title={item.title}
                                    linkRepository={item.linkRepository}
                                    link={item.link}
                                    key={index+"exp"}
                                    />
                        )
                    })

                }
            </div>
            
        </section>

        <BounceTitle  text='Experiments' />

    </div>
    )
}
