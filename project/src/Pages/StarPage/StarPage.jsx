import { useState, useEffect } from "react";
import Item from "../MainPage/Components/Item";
import style from '../MainPage/style.module.scss'
import style2 from './style.module.scss'
import Header from "../../Components/Header/Header";
function StarPage(){
    const [vacancy, setVacancy] = useState([])
    useEffect(()=>{
        const vac = localStorage.getItem('vacancy');
        setVacancy(JSON.parse(vac) || [])
    },[])
    return (
        <>
        <Header></Header>
        <div className={style2.content}>
            <div className={style.vacancies}>
            {vacancy.map(el => <Item el = {el}/>)}
            </div>
        </div>
        </>
    )
}
export default StarPage