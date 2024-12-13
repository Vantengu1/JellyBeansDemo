import { Link } from 'react-router-dom'
import style from './style.module.css'

const Nav = () => {
    return(
        <nav className={style.container}>
            <Link to='/JellyBeansProject/facts'>Facts</Link>
            <Link to='/JellyBeansProject/beans'>Beance</Link>
            <Link to='/JellyBeansProject/recipes'>Recipts</Link>
            <Link to='/JellyBeansProject/combinations'>Combinations</Link>
            <Link to='/JellyBeansProject/history'>History</Link>
            <Link to='/JellyBeansProject/about'>About</Link>
            <Link to='/JellyBeansProject/review'>Review</Link>
        </nav>
    )
}

export default Nav;