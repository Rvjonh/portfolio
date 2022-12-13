import './style.scss';

import Picture from './../../../Components/Picture';

import HTML from './../../../Assets/TechStack/html.png';
import CSS from './../../../Assets/TechStack/css.png';
import JS from './../../../Assets/TechStack/js.png';
import jest from './../../../Assets/TechStack/jest.png';
import Rec from './../../../Assets/TechStack/react.png';
import pyth from './../../../Assets/TechStack/python.png';
import unittest from './../../../Assets/TechStack/unittest.png';
import djn from './../../../Assets/TechStack/django.png';
import msq from './../../../Assets/TechStack/mysql.png';
import git from './../../../Assets/TechStack/git.png';

import BounceTitle from './../../../Components/BounceTitle';

export default function TechStack(){
    return(
        <section className="section">

            <div className='title-header'>
                <h2 className="title-section">Tech Stack</h2>
            </div>

            <div className='medium-box'>
                <p className='text'>
                    You can check a few technologies I’ve been working with recently,
                    although they are not all. I focus more on the fundamentals to create
                    programs that work.
                </p>
            </div>
            
            <BounceTitle text="Skills" />

            <div className='column-flex'>
                <Picture srcRef={HTML} 
                            title="HTML" 
                            className="item-columna-flex"
                            desc={<div>
                                    <p>
                                        To build Websites with SEO (Search Engine Optimization)
                                        and accebility, improving the way people can reach
                                        into it, I develop the content for everyone even
                                        if there's a disability.
                                    </p>
                                </div>}
                            />
                <Picture srcRef={CSS} 
                            title="CSS" 
                            className="item-columna-flex"
                            desc={
                                <p>
                                    To create amazing designs and dynamic animations, 
                                    I feel comfortable with any technology related to 
                                    create stylies for the websites or devices that 
                                    require a new brand color inside.
                                </p>
                                }
                            />
                <Picture srcRef={JS} 
                            title="JAVASCRIPT" 
                            className="item-columna-flex"
                            desc={
                                    <p>
                                        To create instruccions in the web apps I build
                                        , javascript allows me to code functionabilities
                                        for the users who want to make any process easier.
                                    </p>
                                }
                            />
                <Picture srcRef={jest} 
                            title="Jest" 
                            className="item-columna-flex"
                            desc={<p>
                                    Additionally I use Jest to test and certify the quality 
                                    of the software I offer to the public in the UI's created in React. 
                                    It works perfectly to test the deployment of the apps.
                                </p>}
                            />
                <Picture srcRef={Rec} 
                            title="REACT" 
                            className="item-columna-flex"
                            desc={
                                <p>
                                    Makes me feel sure, I use it when the project 
                                    in front of me will be ambitious. 
                                    I create components to reuse them all over the project, 
                                    forming an enviroment to scale base on the requirements.
                                </p>
                                }
                            />
                <Picture srcRef={pyth} 
                            title="PYTHON" 
                            className="item-columna-flex"
                            desc={
                                <p>
                                    A exaggeratedly tool useful to create those 
                                    programs that any person could use, in a need 
                                    I may create scripts, Ui's, games and any class 
                                    of software for clients.
                                </p>
                                }
                            />
                <Picture srcRef={djn} 
                            title="DJANGO" 
                            className="item-columna-flex"
                            desc={<p>
                                    The most roboust python framework to create SSR or RESTfull
                                     APIs for projects, fast and diligent it offers to create 
                                     solutions for problems I face when I develop software.
                                </p>}
                            />
                <Picture srcRef={unittest} 
                            title="Unittest" 
                            className="item-columna-flex"
                            desc={<p>
                                    For robust or wide applications, which helps me to test 
                                    rest API's or functionalities of the python language 
                                    wmostly used to create not so visual software.
                                </p>}
                            />
                
                <Picture srcRef={msq} 
                            title="MYSQL" 
                            className="item-columna-flex"
                            desc={<p>
                                    Taught me the users will need store their 
                                    information in a way, and with SQL I've learned 
                                    to create, read, update and delete information 
                                    for the applicactions I'm asked for clients. 
                                </p>}
                            />
                <Picture srcRef={git} 
                            title="GIT" 
                            className="item-columna-flex"
                            desc={<p>
                                    Being the primary point to access into a 
                                    colavorative team, I have notions about git 
                                    to control versions of my code, I would like 
                                    to keep learning about working 
                                    with a team and these techs.
                                </p>}
                            />
            </div>

        </section>
    )
}