import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import style from './style.module.css'

const Logo = () => {
    return(
        <Link to='/' className={style.logo}>
            <img src={logo} alt="" />
            <span>Jelly Belly</span>
        </Link>
    )
};

export default Logo;