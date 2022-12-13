import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerButton from './../BurgerButton';

import './style.scss';

export default function  NavBar(){
    const [show, setShow] = useState(false);
    const [ barOptions, setBarOptions] = useState({opacity:"0"})

    const handleMenu = ()=>{
        setShow(!show)
    }

    const handlePositionBar = (e)=>{
        setBarOptions({...barOptions, opacity:"1", left:`${e.target.offsetLeft}px`})
    }

    const handleHideBar = ()=>{
        setBarOptions({...barOptions, opacity:"0"})
    }

    return(
        <>
        <BurgerButton onClick={handleMenu} className="button-menu" isActive={show}/>
        
        <div className={`navbar-container ${show ? "active":""}`} onClick={handleMenu}>

            <nav className='navbar'>
                <BurgerButton onClick={handleMenu} isActive={show} className="button-menu"/>


                <ul className='navbar-list' onMouseMove={handlePositionBar} onMouseLeave={handleHideBar}>
                    <li className='navbar-line'>
                        <span className='line' style={barOptions}></span>
                    </li>

                    <li className='navbar-item'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/services">Services</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='navbar-item cv-item'>
                        <a href='https://www.google.com/'>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}