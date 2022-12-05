import Link from 'next/link';
import DiagnoseStyle from '../../styles/Diagnose.module.css';
import DiagnoseSearchBar from '../../components/DiagnoseSearchBar';
import Head from 'next/head';
import { useState } from 'react';
import DiagnoseList from '../../components/DiagnoseList';
import MedicineList from '../../components/MedicineList';

export default function Diagnose() {
    const [diagnoses, setDiagnoses] = useState('')

    const onDiagnoseHandler = (disease) => {
        setDiagnoses(disease)
    }

    return (
        <div>
            <Head>
                <title>Diagnosa Penyakit</title>
            </Head>
            <main id='main-content-diagnoses' className={DiagnoseStyle.main}>
                <div className={DiagnoseStyle.diagnoses}>
                    <h2 className={DiagnoseStyle.header}>Diagnosa Penyakit</h2>
                    <p className={DiagnoseStyle.paragraph}>Kami membantu mendeteksi dini penyakit dan memberikan rekomendasi obat sesuai dengan kebutuhan Anda</p>
                    <DiagnoseSearchBar onDiagnoseHandler={onDiagnoseHandler}/>
                    <DiagnoseList diagnoses={diagnoses}/>
                    <MedicineList diagnoses={diagnoses}/>
                </div>
            </main>
        </div>
    )
}