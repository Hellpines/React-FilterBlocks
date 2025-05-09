import style from '../style.module.scss'
function Item(obj) {
    return (
        <div className={style.item}>
            <h2>{obj.el.title}</h2>
            <div className={style.conditions}>
                <p>{obj.el.salary}</p>
                <p className={style.day}>{obj.el.schedule}</p>
            </div>
            <p className={style.place}>{obj.el.place}</p>
        </div>
    )
}
export default Item