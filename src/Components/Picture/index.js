
import './style.scss';

export default function Picture({children, srcRef, alt, title, desc, ...props}){

    return(
        <figure {...props} className={`picture ${props?.className}`}>
            <picture className={`picture-img`}>
                {title && <h4>{title}</h4>}
                <img src={srcRef} alt={alt} draggable={false}/>
                {children}
            </picture>
            <figcaption className={`description`}>
                {desc}
            </figcaption>
        </figure>
    )
}