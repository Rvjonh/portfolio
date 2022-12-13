
import './style.scss';

export default function BurgerButton({text="Menu",isActive=false, onClick=f=>f, className=""}){

    return(
        <div tabIndex="0" className={`container-button ${className}`} onClick={onClick}>
            <h2>{text}</h2>
            <div className={`container-bars ${isActive ? "change" : ""}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>  
        </div>
    )
}