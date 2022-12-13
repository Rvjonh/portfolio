
import './style.scss';

import Button from './../../../Components/Button';
import CidImg from './../../../Assets/Extra/sid.png';

export default function CookiePanel({setCookie}){
    return(
        <div className='cookie-panel'>
            <h4>Hello, this website doesn't use cookies, we just wanted to say all cookies are for Cid</h4>
            <Button onClick={()=>setCookie(false)}
                    textColor='white' bgColor='rgb(0, 127, 255)'>
                Accept Cookies
                </Button>
            <img src={CidImg} alt="sid eating the website's cookies" />
        </div>
    )
}