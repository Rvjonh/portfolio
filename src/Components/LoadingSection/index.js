
import './style.scss';

import MainWrap from './../../Components/MainWrap';
import Spinner from './../Spinner';

export default function LoadingSection(){
    return(
        <MainWrap className='loader-section'>
            <Spinner />
            <h1>Loading</h1>
            <span className='loader'></span>
        </MainWrap>
    )
}