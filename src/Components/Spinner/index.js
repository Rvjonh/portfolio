
import './style.scss';

export default function Spinner({text, ...props}){
    return(
        <div {...props} className="spinner">
            <div className="spinner-container">
                <div className="spiner-line"></div>
            </div>
            {text && <span>{text}</span>}
        </div>
    )
}