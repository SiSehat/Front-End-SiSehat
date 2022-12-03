import { useEffect, useState } from "react"
import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from "next/link"

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
        findMedicine(diagnoses.obat)
    }, [diagnoses])

    console.log(medicine.data)
    console.log( typeof medicine.data)

    if(medicine.status==='fail'||medicine==undefined ){
        return (
            <h1>gak ada obat</h1>
        )
    }

    return (
        <section>
            <h2>Kemungkinan Obat</h2>
            {medicine.map((item, index) => {
                <div id='disease__card' className={DiagnoseStyle.disease__card} key={index}>
                    <Link href='#' className={DiagnoseStyle.disease__header}><h3>{item.title}</h3></Link>
                    <image src={item.thumbnail_url} />
                    <p className={DiagnoseStyle.disease__desc}>{item.short_desc}</p>
                </div>
            })}
        </section>
    )
}

export default MedicineList;