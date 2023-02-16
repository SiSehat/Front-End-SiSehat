import DiagnoseStyle from '../styles/Diagnose.module.css';
import { useState } from 'react'
import { toast } from 'react-toastify';

const DiagnoseSearchBar = ({ onDiagnoseHandler }) => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('');

    if (loading) {
        return <div className={DiagnoseStyle.loadingText}></div>;
    }

    const diagnoseDiseases = async (symptoms) => {
        const resp = await fetch('https://api-si-sehat.vercel.app/sympthom', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                symptoms: symptoms
            })
        })
        const data = await resp.json();
        return data
    }

    const onSearch = (keyword) => {
        setSearch(keyword.target.value)
    }

    const onHandlerSearch = async (e) => {
        e.preventDefault();
        const symptoms = search.trim().toLowerCase().replace(/\s/g, '').split(',')
        setLoading(true)
        const resultDisease = await diagnoseDiseases(symptoms)

        if(resultDisease.length !== 0){
            toast.success('Diagnosa dan Rekomendasi Obat Ditemukan')
            setLoading(false)
        } else {
            toast.error('Diagnosa dan Rekomendasi Obat Tidak Ditemukan')
            setLoading(false)
        }
        // console.log(data)
        onDiagnoseHandler(resultDisease)
    }

    return (
        <div>
            <form onSubmit={onHandlerSearch}>
                <input className={DiagnoseStyle.input}
                    placeholder='Tuliskan gejala anda, misalnya : lemas, demam, dsb'
                    value={search}
                    onChange={onSearch} />
                <p style={{
                        color: 'grey', 
                        display: 'inline-block',
                        marginRight: '20px'}} className={DiagnoseStyle.note}>lebih dari satu gejala ? gunakan <span style={{color: 'red', fontWeight: 'bold'}}> koma (,)</span></p>
                {search.includes(',') == 0 && (
                    <p style={{ 
                        color: 'black', 
                        backgroundColor: 'pink', 
                        padding: '10px 20px',
                        display: 'inline-block',
                        borderRadius: '6px'
                    }} className={DiagnoseStyle.note}>Masukan gejala lebih spesifik</p>
                )}
                <button className={DiagnoseStyle.button} type="submit">Cari</button>
            </form>
        </div>
    )
}

export default DiagnoseSearchBar;
