import Item from './Components/Item'
import style from './style.module.scss'
function MainPage(){
    const arr =[
        {title: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', schedule: 'Полный рабочий день', place: 'Новый Уренгой'},
        {title: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', schedule: 'Полный рабочий день', place: 'Москва'},
        {title: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', schedule: 'Сменный график работы', place: 'Самара'},
        {title: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', schedule: 'Полный рабочий день', place: 'Тюмень'}
    ]
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <div className={style.search}>
                    <input type="text" placeholder='Введите название вакансии' />
                    <button>Поиск</button>
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
    )
}
export default MainPage