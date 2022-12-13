

import './style.scss';
import NavBar from './../Navbar';

import Logo from './../Logo';

export default function Header(){
    return(
        <header className="header">
            <h1>
                <Logo />
            </h1>

            <NavBar />
        </header>
    )
}