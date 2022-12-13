
import './style.scss';

export default function BlogPost({link, img=null, title="Hello, this is an blog post", text="text is not defined"}){
    return(
        <a href={link} target="_blank" rel="noreferrer" className='blog-post'>
            <article className='post-article'>
                {img && 
                    <picture className='post-img'>
                        <img src={img} alt={title} draggable={false}/>
                    </picture>
                }
                <h2 className='post-title'>{title}</h2>
                {text.length > 140?
                    <p className='post-text'>
                        {text.slice(0, 140)}...
                    </p>
                    :
                    <p className='post-text'>
                        {text}
                    </p>
                }
            </article>
        </a>
    )
}