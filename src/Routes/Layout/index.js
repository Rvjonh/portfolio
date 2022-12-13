import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import './Style.scss'

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import FloatingButton from '../../Components/FloatingButton';
import CookiePanel from './CookiePanel';

export default function Layout(){
    const [cookie, setCookie] = useState(true);// change to true
    const [position, setPosition] = useState("left")

    useEffect(() => {
        document.addEventListener("scroll",showPos)
        return()=>{
            document.removeEventListener("scroll", showPos)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showPos = (e)=>{
        const distanceScrolled = document.documentElement.scrollTop;
        if(distanceScrolled > 800){
            setPosition("right");
        }else{
            setPosition("left");
        }
    }
    

    return(
        <div className='layout-limit'>
            <div className='layout'>
                <FloatingButton position={position}/>

                <Header />

                <Outlet />

                <Footer />

                {cookie && 
                    <CookiePanel setCookie={setCookie}/>
                }
            </div>
        </div>
    )
}