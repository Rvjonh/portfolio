import './style.scss';

import Picture from './../../Components/Picture';
import blog from './../../Assets/RSS/blog.svg';
import email from './../../Assets/RSS/email.svg';
import github from './../../Assets/RSS/github.svg';
import linkedin from './../../Assets/RSS/linkedin.svg';
import twiter from './../../Assets/RSS/twiter.svg';


const RSSItems = [
    {
        url:"https://twitter.com/Rvjonh",
        img:twiter,
        alt:"twiter link",
        open_tab:true
    },
    {
        url:"https://github.com/Rvjonh",
        img:github,
        alt:"github link",
        open_tab:true
    },
    {
        url:"https://www.linkedin.com/in/jonh-gomez-067087250/",
        img:linkedin,
        alt:"linkedin link",
        open_tab:true
    },
    {
        url:"contact/",
        img:email,
        alt:"email link",
        open_tab:false
    },
    {
        url:"https://www.google.com/",
        img:blog,
        alt:"blog link",
        open_tab:true
    }
]

export default function RSSList({ ...props}){

    return (
        <div {...props} className={`rss-lista ${props.className}`}>
            {
                RSSItems.map((item,index)=>{
                    return <a href={item.url} target={`${item.open_tab ? "_blank": "" }`} rel="noreferrer" key={index+"item"}>
                                <Picture className="rss" srcRef={item.img} alt={item.alt} />
                            </a>
                    
                })
            }
        </div>
    )
    
}