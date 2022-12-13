
import './style.scss';
import Picture from '../Picture';

import gitIcon from './../../Assets/Extra/github-icon-small.png';
import webIcon from './../../Assets/Extra/website-icon-small.png';

export default function Card({srcRef, title, text, linkRepository, link, ...props}){
    return(
        <article {...props} className='card'>
            <header className='card-header'>
                <Picture srcRef={srcRef} alt={title} />
            </header>
            <div className='card-info'>
                <h2 className='title'>{title}</h2>
            </div>
            <div className='item-links'>
                <a href={linkRepository} target="_blank" rel="noreferrer">
                    <Picture srcRef={gitIcon} alt="Link to the project's repository" />
                </a>
                <a href={link} target="_blank" rel="noreferrer">
                    <Picture srcRef={webIcon} alt="Link to the project's visualization" />
                </a>
            </div>
        </article>
    )
}