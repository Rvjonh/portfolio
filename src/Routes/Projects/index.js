import './style.scss';

import useScrollTop from './../../Hooks/useScrollTop';
import MainWrap from '../../Components/MainWrap';

import ProjectCard from './../../Components/ProjectCard';
import Card from '../../Components/Card'

import BounceTitle from './../../Components/BounceTitle';

import { experimentals } from './projectsMedia';

import WordyImg from './../../Assets/Projects/wordyImg.png';
import todoImg from './../../Assets/Projects/todo-app.png';

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

                <ProjectCard title='Wordy - App to learn vocabulary for spanish speakers'
                             img={WordyImg}
                             link="https://aplicacion-wordy.netlify.app/"
                             linkRepository="https://github.com/Rvjonh/wordy"
                             description="A progressive web application which emulates exercises in apps like Duolingo, Memrise and others, helps users to practices and keep new vocabulary, the app uses web API's to work in different devices, allowing save the data and use them in multiple platforms. It's a full applications which allows user to create an account and manage dictionaries, which are sets of words or vocaburlary for the users to practice."
                             listTechs={["Javascript","React", "Redux-toolkit", "Django", "Rest-API", "PWA"]}
                             />

                <ProjectCard title="Fullstack To-Do app with React and Django" 
                             img={todoImg}
                             link="https://rvjonh-todo-app.netlify.app/"
                             linkRepository="https://github.com/Rvjonh/FullStack-ToDo-App"
                             description="With this to-do app, log in and keep your activities, you could create an account and manage your tasks creating, deleting, updating then, filter them and check them in missing or completed. It has a minimalist design and it's a small copy of many of anothers similar projects."
                             listTechs={["Javascript","React", "Redux-toolkit", "Django", "Rest-API", "PWA"]}
                             reversed={true}
                             />

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
