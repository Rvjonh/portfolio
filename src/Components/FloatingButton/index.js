import { useState } from 'react';
import './style.scss';


import LogoRSS from './../../Assets/Extra/world.svg';
import RSSList from './../RSSButtons';

export default function FloatingButton({position="left", ...props}){
    const [show, setShow] = useState(false);

    const handleShowContent = () =>{
        setShow(!show);
    }

    return(
        <div className={`float-container ${position}`} >

            <div className={`float-content`}>
                <RSSList className={`float-buttons ${show? "active":"desactive"}`}/>
            </div>

            <button {...props} className="float-button" 
                                onClick={handleShowContent}
                                >
                <img className='float-img' src={LogoRSS} alt="Contact with me by" />
            </button>
        </div>
    )
}