

import './style.scss'

export default function Button({children, className, textColor="#000000", bgColor="#ffffff", ...props}){
    const innerStyle ={
        color: textColor,
        backgroundColor:bgColor
    }

    return(
        <button {...props} 
            style={innerStyle}
            className={"button "+className}
            >
            {children}
            </button>
    )
}