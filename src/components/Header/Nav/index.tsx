import { Link } from 'react-router-dom'
import style from './style.module.css'

const Nav = () => {
    return(
        <nav className={style.container}>
            <Link to='/JellyBeansDemo/facts'>Facts</Link>
            <Link to='/JellyBeansDemo/beans'>Beance</Link>
            <Link to='/JellyBeansDemo/recipes'>Recipts</Link>
            <Link to='/JellyBeansDemo/combinations'>Combinations</Link>
            <Link to='/JellyBeansDemo/history'>History</Link>
            <Link to='/JellyBeansDemo/about'>About</Link>
            <Link to='/JellyBeansDemo/review'>Review</Link>
        </nav>
    )
}

export default Nav;