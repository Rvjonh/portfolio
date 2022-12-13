
import './style.scss';
import Picture from './../Picture';

import SidWallpare from './../../Assets/Projects/wordy.png';
import gitIcon from './../../Assets/Extra/github-icon-small.png';
import webIcon from './../../Assets/Extra/website-icon-small.png';

export default function ProjectCard({img=null, 
                                        title="Article's title n-small.png", 
                                        description="that will be displayed to show information This is something that will be displayed to show information This is something that will be displayed to show information This is something that will be displayed to show information This is something that will be displayed to show information This is something that will be displayed to show information",
                                        link = "https://www.google.com/",
                                        linkRepository = "https://www.google.com/",
                                        className="", 
                                        reversed=false,
                                        ...props}){
    return(
        <article {...props} className={`item-article ${className} ${reversed?'reversed-card':""}`}>

            <a href={link} target="_blank" rel="noreferrer" className="item-img">
                <Picture 
                        srcRef={img===null? SidWallpare: img}
                        lt={`Articulo ${title}`}/>
            </a>

            <div className='item-content'>

                <h3 className='item-title'>
                    <a href={link} target="_blank" rel="noreferrer">
                            {title}
                    </a>
                </h3>

                <p className='item-description'>
                    {description}
                </p>

                <div className='item-footer'>
                    <ul className='item-technologies'>
                        <li>Javascript</li>
                        <li>react</li>
                        <li>css</li>
                        <li>scrum master</li>
                        <li>python</li>
                        <li>Javascript</li>
                        <li>git</li>
                    </ul>
                    <div className='item-links'>
                        <a href={linkRepository} target="_blank" rel="noreferrer">
                            <Picture srcRef={gitIcon} alt="Link to the project's repository" />
                        </a>
                        <a href={link} target="_blank" rel="noreferrer">
                            <Picture srcRef={webIcon} alt="Link to the project's visualization" />
                        </a>
                    </div>
                </div>

            </div>
        </article>
    )
}