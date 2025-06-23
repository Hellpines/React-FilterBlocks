import style from './style.module.scss'
import img from './Union.svg';
import {Link} from 'react-router-dom'
function Header(){
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={img} alt="img" />
                    <p>Jobored</p>
                </div>
                <div className={style.links}>
                    <Link to='/'><p className={style.search}>Поиск Вакансий</p></Link>
                    <Link to='/basket'><p className={style.star}>Избранное</p></Link>
                </div>
            </div>
        </>
    )
}
export default Header;