
import './style.scss';
import MainWrap from './../../Components/MainWrap';

import useScrollTop from './../../Hooks/useScrollTop';

import Head from './Head';
import { AboutSections } from './../About';
import { ContactSections } from './../Contact';
import { ProjectsSections } from './../Projects';
import { ServicesSections } from './../Services';
import { BlogSections } from './../Blog';

export default function Home(){
    useScrollTop();

    return(
        <MainWrap>

            <Head />

            <AboutSections />

            <ProjectsSections />

            <ContactSections />

            <ServicesSections />

            <BlogSections />

        </MainWrap>
    )
}