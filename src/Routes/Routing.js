import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import LoadingPage from './../Components/LoadingPage';
import LoadingSection from './../Components/LoadingSection';

const Layout = React.lazy(()=>import('./Layout'));
const Home = React.lazy(()=>import('./Home'));
const About = React.lazy(()=>import('./About'));
const Projects = React.lazy(()=>import('./Projects'));

const Contact = React.lazy(()=>import('./Contact'));
const Services = React.lazy(()=>import('./Services'));
const Blog = React.lazy(()=>import('./Blog'));

const NotFound = React.lazy(()=>import('./NotFound'));


export default function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Loader element={<Layout />} Img={<LoadingPage />} /> } >

                    <Route index element={ <Loader element={<Home />} /> } />

                    <Route path='about' element={ <Loader element={<About />} /> } />
                    <Route path='projects' element={ <Loader element={<Projects />} /> } />
                    <Route path='contact' element={ <Loader element={<Contact />} /> } />
                    <Route path='services' element={ <Loader element={<Services />} /> } />
                    <Route path='blog' element={ <Loader element={<Blog />} /> } />

                    <Route path='*' element={ <Loader element={<NotFound />}/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const Loader = ({element=null, Img=null})=>(

    <Suspense delayMs={2000} fallback={ Img===null? <LoadingSection /> : Img}>
        {element}
    </Suspense>
)