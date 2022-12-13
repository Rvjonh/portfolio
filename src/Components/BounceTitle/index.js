
import './style.scss';

export default function BounceTitle({text="Example"}){

    return(
        <h3 className={`bounce-word`}>
            {
                text.split("").map((item, index)=>{
                    return <span key={index+item}
                                className='bounce-letter'
                                >
                                {item}
                            </span>
                })
            }
        </h3>
    )
}