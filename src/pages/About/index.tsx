import style from './style.module.css';

const About = () => {
    return (
        <div className={style.container}>
            <h2>What to find in this API?</h2>
            <span className={style.line}></span>
            <ul className={style.grid_box}>
                <li>
                    <p className={style.number}>100 +</p>
                    <p className={style.text}>Jelly belly beans</p>
                </li>
                <li>
                    <p className={style.number}>8</p>
                    <p className={style.text}>Properties on each bean</p>
                </li>
                <li>
                    <p className={style.number}>99 +</p>
                    <p className={style.text}>Facts on Jelly Belly</p>
                </li>
                <li>
                    <p className={style.number}>20 +</p>
                    <p className={style.text}>Milestones in the Jelly Belly History</p>
                </li>
                <li>
                    <p className={style.number}>25 +</p>
                    <p className={style.text}>Recipes</p>
                </li>
                <li>
                    <p className={style.number}>50 +</p>
                    <p className={style.text}>Jelly Belly Combinations</p>
                </li>
            </ul>
            <p className={style.link_site}>
                All data reflecting from the original
                <a href="#"> Jelly Belly Website {'>'}</a>
            </p>
            <div className={style.check}>
                <p>Check out all endpoints</p>
                <ul className={style.list_link}>
                    <li>
                        <a href="#">Beans {'>'}</a>
                    </li>
                    <li>
                        <a href="#">Recipes {'>'}</a>
                    </li>
                    <li>
                        <a href="#">Facts {'>'}</a>
                    </li>
                    <li>
                        <a href="#">Combinations {'>'}</a>
                    </li>
                    <li>
                        <a href="#">History {'>'}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Content and Sources</h3>
                <p className={style.text_block}>The content, including images and data, has been sourced from the official Jelly Belly website (<a href="#">www.jellybelly.com</a>). It's important to note that I do not claim ownership of any information on this API or website, except for the original graphics of the logo and logotype. The rest of the content is a creative remix of the available information.</p>
            </div>
            <div>
                <h3>Contribution and Contact</h3>
                <p className={style.text_block}>If you have suggestions, comments, or contributions for this API or website, please feel free to reach out. You can contact me through the "Contact" section on this website or directly via email at <a href="mailto:moshikoatia@gmail.com">moshikoatia@gmail.com</a>. Your input and collaboration are greatly appreciated.</p>
            </div>
        </div>
    );
};

export default About ;