

import './style.scss'
import MainWrap from './../MainWrap';

import LoadingSection from './../LoadingSection';

export default function LoadingPage(){
    return(
        <MainWrap className="loading-page">
            <LoadingSection />
        </MainWrap>
    )
}