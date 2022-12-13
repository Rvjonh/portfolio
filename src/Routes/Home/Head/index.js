
import { Link } from 'react-router-dom';

import './style.scss';
import BackVideo from './../../../Assets/Videos/Glitch.mp4';
import Logo from './../../../Assets/logo-svg.svg';
import Button from './../../../Components/Button';

import Picture from './../../../Components/Picture';
import scrollImg from './../../../Assets/Extra/scroll-down.svg';

export default function Head(){
    

    const handleScroll = ()=>{
        window.scrollTo(0,800);
    }

    return(
        <section className='section-2parts principal'>


            <video className="background-video" autoPlay={true} loop={true} muted={true}>
                <source src={BackVideo} type="video/mp4" />
            </video>

            <div className='box head'>
                <h2 className='title'>Hi, I'm Jonh</h2>
                <p className='presentation'>
                    I'm a fullstack React & Django web developer and systems engineer, 
                    eager to create software that helps people to optimize their work.
                    Currently, I'm looking for a job in a company to integrate myself to a goal.                    
                    &#127773;</p>
                    <Link to="/projects">
                        <Button
                                textColor='#fff'
                                bgColor='rgb(0, 127, 255)'
                                className="edit-button">
                            My Projects
                        </Button>
                    </Link>
            </div>
            <div className='box head'>
                <div className='bgBox'>

                    <Picture 
                        srcRef={Logo}
                        desc="I use Rvjonh as my personal brand"
                        className="edit-img"
                        />
                </div>
            </div>

            <div className="scroll-picture">
                <Picture srcRef={scrollImg}
                         onClick={handleScroll}
                         desc={<p>Scroll down 😎</p>}
                         alt="scroll down to see more content" />
            </div>

        </section>
    )
}