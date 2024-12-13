import { useIsMobile } from "../../hooks/useMobile.ts";
import Logo from "../Logo/Logo.tsx"
import { MobileMenu } from "./MobileMenu";
import Nav from "./Nav/index.tsx"
import style from "./style.module.css"

const Header = () => {
    const isMobile = useIsMobile();


    return(
        <header>
            <div  className={style.container}>
                <Logo />
                {isMobile ? <MobileMenu /> : <Nav />}
            </div>
        </header>
    );
};

export default Header;