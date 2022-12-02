import Link from 'next/link';
import DiagnoseStyle from '../../styles/Diagnose.module.css';
import DiagnoseSearchBar from '../../components/DiagnoseSearchBar';
import Head from 'next/head';
import { useState } from 'react';
import Disease from '../../components/DiseaseComponent';

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
            <main>
                <div className={DiagnoseStyle.diagnoses}>
                    <h2 className={DiagnoseStyle.header}>Diagnosa Penyakit</h2>
                    <p className={DiagnoseStyle.paragraph}>Kami membantu mendeteksi dini penyakit dan memberikan rekomendasi obat sesuai dengan kebutuhan Anda</p>
                    <DiagnoseSearchBar onDiagnoseHandler={onDiagnoseHandler}/>
                    <Disease diagnoses={diagnoses}/>
                </div>
            </main>
        </div>
    )
}