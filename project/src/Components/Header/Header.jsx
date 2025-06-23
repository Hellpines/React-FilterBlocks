import style from './style.module.scss'
<<<<<<< HEAD
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
=======
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
>>>>>>> 844753582d0f5c9984448a39a81ec3024f37aa0b
