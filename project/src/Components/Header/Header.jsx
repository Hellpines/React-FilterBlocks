import style from './style.module.scss'
import img from './Union.svg'
function Header(){
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.logo}>
                        <img src={img}/>
                        <h2>Jobored</h2>
                    </div>
                    <div className={style.links}>
                        <p>Поиск Вакансий</p>
                        <p>Избранное</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header