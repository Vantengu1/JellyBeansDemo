import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
    <div className={style.container}>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
            <div className={style.wrapper}>
                <nav>
                    <Link to="/JellyBeansDemo/beans" onClick={handleLinkClick}>
                        Beans
                    </Link>
                    <Link to="/JellyBeansDemo/facts" onClick={handleLinkClick}>
                        Facts
                    </Link>
                    <Link to="/JellyBeansDemo/recipes" onClick={handleLinkClick}>
                        Recipes
                    </Link>
                    <Link to="/JellyBeansDemo/combinations" onClick={handleLinkClick}>
                        Combinations
                    </Link>
                    <Link to="/JellyBeansDemo/history" onClick={handleLinkClick}>
                        History
                    </Link>
                    <Link to="/JellyBeansDemo/about" onClick={handleLinkClick}>
                        About
                    </Link>
                </nav>
            </div>
        )}
    </div>
    );
};