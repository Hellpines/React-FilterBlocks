import style from '../style.module.scss'
function Item(obj) {
    function add(){
        const vacancyInStorage = JSON.parse(localStorage.getItem('vacancy')) || [];
        if(vacancyInStorage.length > 0) {
            const filtered = vacancyInStorage.filter((el) => el.title != obj.el.title)
            localStorage.setItem('vacancy', JSON.stringify([...filtered, obj.el]))
        }
        
        else localStorage.setItem('vacancy', JSON.stringify([obj.el]))
    }
    return (
        <>
        <a href={obj.el.id}>
            <div className={style.item}>
                <h2>{obj.el.title}</h2>
                <div className={style.conditions}>
                    <p>{obj.el.salary}</p>
                    <p className={style.day}>{obj.el.schedule}</p>
                </div>
                <p className={style.place}>{obj.el.location}</p>
            </div>
        </a>
        <button onClick={add}>В избранное</button>
        </>
    )
}
export default Item