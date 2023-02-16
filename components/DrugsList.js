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

    const widthItemDiagnose = (total) => {
        return (total < 5) ? `disease__card fullWidth` : `disease__card cardWidth`;
    }
    
    return (
        <section className={`cardList`}>
            <h2 className={`disease__title`}>Daftar Obat</h2>
            <span className={medicines.length > 5 ? 'wrap' : ''}>
                {medicines.map((item, index) => (
                    <div id='disease__card' className={widthItemDiagnose(medicines.length)} key={index}>
                        <Link href='#' className={`disease__header`}><h3>{item.data.title}</h3></Link>
                        <div>
                            <img className={`disease__image`} src={item.data.thumbnail_url} />
                        </div>
                        <p className={`disease__desc`}>{item.data.short_desc}</p>
                        <button className={`disease__button`} onClick={onHandlerDetail.bind(this, item.id)} >Detail</button>
                    </div>
                ))}
            </span>
        </section>
    )
}

export default DrugsList;
