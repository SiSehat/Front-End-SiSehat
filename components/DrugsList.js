import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from "next/link"
import Router from 'next/router'

const DrugsList = ({ medicines }) => {
    if (medicines?.length == null) {
        
        return (
            <div></div>
        )
    }

    const onHandlerDetail = (id) => {
        Router.push(`/drugs/${id}`)
    }
    
    return (
        <section className={DiagnoseStyle.cardListDrug}>
            <h2 className={DiagnoseStyle.disease__title}>Kemungkinan Obat</h2>
            <div className={DiagnoseStyle.cardListDrugWrapper}>
                {medicines.map((item, index) => (
                    <div id='disease__card' className={DiagnoseStyle.disease__card} key={index}>
                        <Link href='#' className={DiagnoseStyle.disease__header}><h3>{item.title}</h3></Link>
                        <div>
                            <img className={DiagnoseStyle.disease__image} src={item.thumbnail_url} />
                        </div>
                        <p className={DiagnoseStyle.disease__desc}>{item.short_desc}</p>
                        <button className={DiagnoseStyle.disease__button} onClick={onHandlerDetail.bind(this, item.id)} >Detail</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DrugsList;
