

import './style.scss';


import MainWrap from "../../Components/MainWrap";
import ServiceCard from './../../Components/ServiceCard';
import norImg from './../../Assets/Extra/standard.png';
import staImg from './../../Assets/Extra/normal.png';
import proImg from './../../Assets/Extra/professional.png';

export default function Services(){
    return(
        <MainWrap>
            <ServicesSections />
        </MainWrap>
    )
}

export function ServicesSections(){
    return(
    <>
        <section className='services-header'>
            <div className='title-header'>
                <h2 href='#about' className="title-section">SERVICES</h2>
            </div>

            <p className="text">
                I currently work as a web developer, so if you are looking for a specific software development topic, let me tell you about some tasks that I can help you with, actually software moves the world, why not boost your project with software too?
            </p>
        </section>

        <section className='services-panel'>
            <ServiceCard title="Standard"
                            items={[
                                    "Rank your website with a better structure, improving SEO HTML (Search Engine Optimization), put your website on google's top searches.",
                                    "Increase the user retention, improving the UI/UX giving a smooth design, adaptive for mobiles, updating any new trends or broken feature.",
                                    "Full update of the web style, receiving a new modern design becoming attractive visually."
                                ]}
                            bgImg={staImg}/>

            <ServiceCard title="Normal"
                            items={[
                                "Web design, create a full website, app or site for a specific purpose from totally 0 to a full app for your client's usability.",
                                "Integrate different services with your website through API's, like Social media, email, management or webhooks.",
                                "Web programming, build a software that involves a programming language like javascript or python to integrate it with your own product.",
                            ]}
                            bgImg={norImg}/>

            <ServiceCard title="Professional"
                            items={[
                                "Full maintenance for built websites, including help desk for future improves or bugs in your application.",
                                "Software development, code applications for different platforms for personal or enterprise optimization.",
                                "Structure your data with a relational database, to get management of your information. "
                            ]}
                            bgImg={proImg}/>
        </section>
    </>
    )
}