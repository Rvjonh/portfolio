import { Link } from 'react-router-dom';

import './style.scss';

import Picture from './../Picture';
import Button from './../Button';

export default function ServiceCard({title, desc=null, items=[], bgImg=null, ...props}){
    return(
        <article className="service-card">
            <header className='service-header'>
                <h2>{title}</h2>
            </header>
            <div className='service-info'>

                {desc && 
                    <p className='service-desc'>
                        {desc}
                    </p>
                }

                <ul className='service-items'>
                {
                    items.map((item, index)=>{
                        return <li key={index+title}>{item}</li>
                    })
                }
                </ul>

                <Link to="/contact" className='top-bottom'>
                    <Button textColor='#ffffff' bgColor='#007fff'>
                            Contact me
                    </Button>
                </Link>

                {bgImg && <Picture srcRef={bgImg} className="bg-img"/>}
            </div>
        </article>
    )
}