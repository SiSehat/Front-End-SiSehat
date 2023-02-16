import { useEffect, useState } from "react"
import Link from "next/link"
import Router from "next/router"

const MedicineList = ({ diagnoses }) => {
    const [medicine, setMedicine] = useState({data: []})

    useEffect(() => {
        const findMedicine = async (medicines) => {
            try {
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
                if (data.status == 'success') {
                    setMedicine(data)
                }
            } catch (error) {
                // console.error(error);
            }
        }
        if(diagnoses){
            diagnoses.forEach(disease => {
                findMedicine(disease.obat)
            });
        }
    }, [diagnoses])

    if (medicine.status === 'fail' || medicine.data.length == 0) {
        return (
            <div></div>
        )
    }

    const onDetailMedicine = (id) => {
        Router.push(`/drugs/${id}`)
    }

    const widthItemDiagnose = (total) => {
        return (total <= 4) ? `disease__card fullWidth` : `disease__card cardWidth`;
    }

    return (
        <section className={`cardList`}>
            <div>
                <h2 className={`disease__title`}>Obat</h2>
                <div className={`wrapper_list_drug ${medicine.data.length >= 4 && 'wrap'}`}>
                    {medicine.data.map((item, index) => (
                        <div id='disease__card' 
                            className={widthItemDiagnose(medicine.data.length)} 
                            key={index}
                            onClick={onDetailMedicine.bind(this, item.id)}>
                            <Link href='#' className={`disease__header`}><h3>{item.data.title}</h3></Link>
                            <div>
                                <img className={`disease__image`} src={item.data.thumbnail_url} />
                            </div>
                            <p className={`disease__desc`}>{item.data.short_desc}</p>
                            <button className={`disease__button`}>Detail</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MedicineList;