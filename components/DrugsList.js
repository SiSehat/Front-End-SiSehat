import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from "next/link"

const DrugsList = ({ medicines }) => {
    console.log(medicines)
    if (medicines.length === 0) {
        return (
            <div></div>
        )
    }
    return (
        <section className={DiagnoseStyle.cardList}>
            <div>
                <h2 className={DiagnoseStyle.disease__title}>Kemungkinan Obat</h2>
                {medicines.map((item, index) => (
                    <div id='disease__card' className={DiagnoseStyle.disease__card} key={index}>
                        <Link href='#' className={DiagnoseStyle.disease__header}><h3>{item.title}</h3></Link>
                        <img className={DiagnoseStyle.disease__image} src={item.thumbnail_url} />
                        <p className={DiagnoseStyle.disease__desc}>{item.short_desc}</p>
                        <button className={DiagnoseStyle.disease__button}>Detail</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DrugsList;
