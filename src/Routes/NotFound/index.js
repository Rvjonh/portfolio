

import MainWrap from './../../Components/MainWrap';

import Picture from './../../Components/Picture';
import Sib from './../../Assets/Extra/sid.png';

export default function NotFound(){
    return(
        <MainWrap>

            <div className='title-header'>
                <h2 href='#about' className="title-section">ERROR 404 - Page not found</h2>
            </div>

            <Picture srcRef={Sib} alt="there is no such a page here 0_o" />

            <p className='text'>
                If you were looking for cookies, I've eaten all of them. 😁
            </p>
        </MainWrap>
    )
}