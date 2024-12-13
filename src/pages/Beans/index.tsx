import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import style from './style.module.css'


const Beans = () => {

    const [filterValue, setFilterValue] = useState('');

    return (
        <div className={style.beans_container}>
            <Search setFilterValue={setFilterValue}/>
            <Cards filterValue={filterValue}/>
        </div>
    );
};

export default Beans;