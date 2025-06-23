import vacancies from '../Array'
import { useParams } from 'react-router-dom'
import Item from '../MainPage/Components/Item'
import style2 from '../MainPage/style.module.scss'
import style from './style.module.scss'
import Header from '../../Components/Header/Header'
function VacancyPage() {
    const { id } = useParams()
    const filtered = vacancies.filter(el => el.id == id)
    return (
        <>
        <Header/>
            <div className={style.content}>
                <div className={style2.vacancies}>
                    {filtered.map((el) => <Item el={el} />)}
                </div>
                <div className={style.information}>
                    <div className={style.block}>
                        <h2>Обязанности:</h2>
                        <ul>
                            {filtered[0].responsibilities.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                    <div className={style.block}>
                        <h2>Требования:</h2>
                        <ul>
                            {filtered[0].requirements.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                    <div className={style.block}>
                        <h2>Условия:</h2>
                        <ul>
                            {filtered[0].conditions.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VacancyPage