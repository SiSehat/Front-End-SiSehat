import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DiagnoseStyle from '../styles/Diagnose.module.css';

const DrugsSearchBar = ({ onDrugsHandler }) => {
  const [loading, setLoading] = useState(false)
  const [medicines, setMedicines] = useState('')
  const [search, setSearch] = useState('');

  if (loading) {
    return <div className={DiagnoseStyle.loadingText}></div>;
  }

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
    setMedicines(data)
    return data 
  }

  const onSearch = (keyword) => {
    setSearch(keyword.target.value)
  }

  const onHandlerSearch = async (e) => {
    e.preventDefault()
    const medicines = search.trim().toLowerCase().split(',')
    console.log(medicines)
    setLoading(true)
    const { status, data } = await findMedicine(medicines)
    if (status === 'success') {
      toast.success('Obat Ditemukan')
      setLoading(false)
    }
    // console.log(data)
    onDrugsHandler(data)
  }

  return (
    <div>
      <form onSubmit={onHandlerSearch}>
        <input className={DiagnoseStyle.input}
          placeholder='Tuliskan nama obat, misalnya: Paramex Flu dan Batuk, dsb '
          value={search}
          onChange={onSearch} />
        <button className={DiagnoseStyle.button} type="submit">Cari</button>
      </form>
    </div>
  )
};

export default DrugsSearchBar