
import './style.scss';

import Logo from './../Logo';

import RSSList from '../RSSButtons';
import { useState } from 'react';

export default function Footer(){
    const [coors, setCoors] = useState({x:0, y:0})

    const handleSetTop =()=>{
        window.scrollTo(0,0);
    }

    const getYear = ()=>{
        return new Date().getFullYear();
    }

    const handleCoorsBackground = (e) =>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCoors({x:x/rect.width*100, y:y/rect.height*100})
    }

    return(
        <footer className="footer" onMouseMove={handleCoorsBackground}>

            <span className='footer-begin' >

                <div onClick={handleSetTop} className='toper'>
                    <Logo />
                </div>

                <RSSList className="rss-edited"/>

                <div className='rss-text'>
                    <p>Designed & created ® by Rvjonh</p>
                    <p>All rights reserved © {getYear()}</p>
                </div>
            </span>


            <div className='background' style={{clipPath: `polygon(${coors.x}% ${coors.y}%, 0 0, 100% 0%)`}}>
                <div onClick={handleSetTop} className='toper'>
                    <Logo />
                </div>

                <RSSList className="rss-edited"/>

                <div className='rss-text'>
                    <p>Designed & created ® by Rvjonh</p>
                    <p>All rights reserved © {getYear()}</p>
                </div>
            </div>
            

        </footer>
    )
}