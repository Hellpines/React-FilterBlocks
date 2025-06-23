import Item from './Components/Item'
import style from './style.module.scss'
import vacancies from '../Array'
import { useState } from 'react';
import Header from '../../Components/Header/Header';
function MainPage(){

    const [text, setText] = useState('');
    const [arr, setArr] = useState(vacancies)
    function change(e){
        setText(e.target.value.toLowerCase())
    }
    function search(){
        setArr(vacancies.filter(el => el.title.toLowerCase().includes(text)))
    }
    return (
        <>
        <Header/>
        <div className={style.main}>
            <div className={style.wrapper}>
                <div className={style.search}>
                    <input type="text" placeholder='Введите название вакансии' onChange={change}/>
                    <button onClick={search}>Поиск</button>
                </div>
                <div className={style.vacancies}>
                    {arr.map((el) => <Item el = {el}/>)}
                </div>
                <div className={style.pagination}>
                    <button className={style.page}>l</button>
                    <button className={style.page}>1</button>
                    <button className={style.page}>2</button>
                    <button className={style.page}>3</button>
                    <button className={style.page}>r</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default MainPage