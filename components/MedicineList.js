import { useEffect, useState } from "react"
import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from "next/link"
import Router from "next/router"

const MedicineList = ({ diagnoses }) => {
    const [medicine, setMedicine] = useState([])

    useEffect(() => {
        const findMedicine = async (medicines) => {
            const resp = await fetch('https://api-si-sehat.vercel.app/medicine', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    medicines: medicines
                })
            })
            const data = await resp.json();
            setMedicine(data)
            return data
        }
        if(diagnoses){
            findMedicine(diagnoses.obat)
        }
    }, [diagnoses])

    if (medicine.status === 'fail' || medicine.data == undefined) {
        return (
            <div></div>
        )
    }

    const onDetailMedicine = (id) => {
        Router.push(`/drugs/${id}`)
    }

    return (
        <section className={DiagnoseStyle.cardList}>
            <div>
                <h2 className={DiagnoseStyle.disease__title}>Kemungkinan Obat</h2>
                <div className={DiagnoseStyle.wrapper_list_drug}>
                    {medicine.data.map((item, index) => (
                        <div id='disease__card' className={DiagnoseStyle.disease__card} key={index}>
                            <Link href='#' className={DiagnoseStyle.disease__header}><h3>{item.title}</h3></Link>
                            <div>
                                <img className={DiagnoseStyle.disease__image} src={item.thumbnail_url} />
                            </div>
                            <p className={DiagnoseStyle.disease__desc}>{item.short_desc}</p>
                            <button className={DiagnoseStyle.disease__button} onClick={onDetailMedicine.bind(this, item.id)} >Detail</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MedicineList;