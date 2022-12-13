import { Link } from 'react-router-dom';

import './style.scss';
import MainWrap from "../../Components/MainWrap";
import BlogPost from './../../Components/BlogPost';
import Button from './../../Components/Button';

import imgSoon from './../../Assets/Extra/coming-soon.jpg';

export default function Blog(){
    return(
        <MainWrap>
            <BlogSections />
        </MainWrap>
    )
}

export function BlogSections(){
    return(
        <section>

            <div className='title-header'>
                <h2 className="title-section">BLOG</h2>
            </div>

            <p className="text text-blog">
                In this part you can take a look at some of my projects, 
                I have put them a little description and if you like any 
                of them I would like you to send me a message with your 
                thoughts. I look forward to hearing from you.
            </p>
            
            <div className='posts-container'>
                <BlogPost img={imgSoon} 
                            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                            />
                <BlogPost img={imgSoon} 
                            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                            />
                <BlogPost img={imgSoon} 
                            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                            />
                <BlogPost img={imgSoon} 
                            text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                            />
            </div>

            <div className='links-controls'>
                <Link to='/services'>
                    <Button textColor='#ffffff'
                            bgColor='rgb(0, 127, 255)'>
                                View More
                    </Button>
                </Link>
            </div>

        </section>
    )
}
