import './style.scss';

export default function MainWrap({children, className=""}){
    return(
        <main className={`content-layout ${className}`}>
            {children}
        </main>
    )
}