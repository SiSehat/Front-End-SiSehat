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
        // console.log(data);
        return data
    }

    const onSearch = (keyword) => {
        setSearch(keyword.target.value)
    }

    const onHandlerSearch = async (e) => {
        e.preventDefault();
        const symptoms = search.trim().toLowerCase().replace(/\s/g, '').split(',')
        // console.log(symptoms)
        setLoading(true)
        const {status, data} = await diagnoseDiseases(symptoms)
        // console.log(status)
        if(status==='success'){
            toast.success('Diagnosa dan Rekomendasi Obat Ditemukan')
            setLoading(false)
        }
        // console.log(data)
        onDiagnoseHandler(data)
    }

    return (
        <div>
            <form onSubmit={onHandlerSearch}>
                <input className={DiagnoseStyle.input}
                    placeholder='Tuliskan gejala anda, misalnya : lemas, demam, dsb'
                    value={search}
                    onChange={onSearch} />
                <button className={DiagnoseStyle.button} type="submit">Cari</button>
            </form>
        </div>
    )
}

export default DiagnoseSearchBar;
