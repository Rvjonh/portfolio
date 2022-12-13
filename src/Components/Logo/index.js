
import './style.scss';
import { Link } from 'react-router-dom';
import LogoImg from './../../Assets/logo-svg.svg';

export default function Logo(){
    return(
        <picture className='header-logo'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to='/'>
                <img src={LogoImg} alt="RvJonh"/>
                <span className='logo-text'>Jonh</span>
            </Link>
        </picture>
    )
}