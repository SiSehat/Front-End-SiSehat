import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import dataDisease from '../../data/template_disease';
import ModalForm from '../modal/modalForm';
import ModalItem from '../modal/modalItem';

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <>
        <Cell {...props}>
            <button className='btn-edit' onClick={() => { onClick && onClick(rowData, 'edit'); }}> Edit </button>
            <button className='btn-delete' onClick={() => { onClick && onClick(rowData, 'delete'); }}> Remove </button>
            <button id="myBtn" onClick={() => { onClick && onClick(rowData, 'detail'); }}> Detail </button>
        </Cell>
      </>
    );
};

const DashboardListDisease = ({ datas }) => {

    if (datas === null) return 
    
    const [disease, setDisease] = useState(datas)
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [selectedEditData, setSelectedEditData] = useState(null);
    const [selectedPOSTData, setSelectedPOSTData] = useState(null);
    const modal = useRef(null);

    setInterval(() => {
        setTime(new Date().toLocaleString('id'))
    }, 10000);


    const handleClick = (data, actionType) => {
        switch (actionType) {
            case 'detail':
                setSelectedData(data)   
                setSelectedPOSTData(null)
                setSelectedEditData(null)   
                modal.current.style.display = "block"
                window.onclick = function(event) {
                    if (event.target == modal.current) {
                      modal.current.style.display = "none";
                    }
                }
                break;
            case 'edit': 
                setSelectedData(null)
                setSelectedPOSTData(null)
                setSelectedEditData(data)
                modal.current.style.display = "block"
                window.onclick = function(event) {
                    if (event.target == modal.current) {
                      modal.current.style.display = "none";
                    }
                }
            break;

            case 'add': 
                setSelectedData(null)   
                setSelectedEditData(null)
                setSelectedPOSTData({...dataDisease})
                modal.current.style.display = "block"
                window.onclick = function(event) {
                    if (event.target == modal.current) {
                      modal.current.style.display = "none";
                    }
                }
            break;
            
            case 'delete': 
                const confirmDelete = confirm(`Yakin ingin hapus data ${data.title} ?`)
                if (confirmDelete) {
                    handleRemoveDisease(data.id)
                }
            default:
                break;
        }
    };

    const handleRemoveDisease = async (id) => {
        const idToast = toast.loading('Tunggu sebentar')
        try {
            const dataRaw = await fetch(`https://api-si-sehat.vercel.app/disease/${id}`, {
                method: 'DELETE'
            })
            
            const diseasesDelete = disease.filter((disease) => disease.id !== id)
            setDisease(diseasesDelete)
            toast.update(idToast, {render: 'berhasil dihapus', type: 'success', isLoading: false, autoClose: 5000})
        } catch (error) {
            console.log(error);
            toast.update(idToast, {render: 'gagal dihapus', type: 'error', isLoading: false, autoClose: 5000})
        }
    }

    return (
        <div className='dashboard-list'>
            <div className='dashboard-head'>
                <h2>Daftar Penyakit</h2>
                <p>{time}</p>
            </div>
            <div className='say-hello'>
                <h3>Selamat Datang Joko !</h3>
                <p>adawdafawa;ldalfhakfhDHAKFAWD</p>
            </div>
            <div className='dashboard-content'>
                <p>Untuk melihat penyakit lebih lengkap dapat menekan tombol [ <b>detail</b> ]</p>
                <button onClick={() => handleClick(null, 'add')}>Tambah Data</button>

                <Table
                    height={400}    
                    data={disease}
                    loading={loading}
                    style={{marginTop: '20px'}}
                    onRowClick={data => {
                        
                    }}
                    >
                    <Column width={150} fixed sortable>
                        <HeaderCell style={{borderTopLeftRadius: '12px'}} className='thead'>Title</HeaderCell>
                        <Cell dataKey="title" />
                    </Column>

                    <Column width={200}  fixed sortable>
                        <HeaderCell className='thead'>
                            categories
                        </HeaderCell>
                        <Cell dataKey="categories" />
                    </Column>

                    <Column width={200} >
                        <HeaderCell className='thead'>Pencegahan</HeaderCell>
                        <Cell dataKey="medication" />
                    </Column>

                    <Column width={300}>
                        <HeaderCell className='thead'>reviewer_name</HeaderCell>
                        <Cell dataKey="reviewer_name" />
                    </Column>

                    <Column flexGrow={2}>
                        <HeaderCell style={{borderTopRightRadius: '12px'}} className='thead'>Action</HeaderCell>
                        <ActionCell dataKey="id" onClick={handleClick} />
                    </Column>
                </Table>

                
                {/* <!-- The Modal --> */}
                <div id="myModal" ref={modal} className="modal">

                    {/* <!-- Modal content --> */}
                    {
                        selectedData && (
                            <ModalItem selectedData={selectedData} />
                        )
                    }
                    {
                        selectedEditData && (
                            <ModalForm method={'PUT'} selectedData={selectedEditData} />
                        )
                    }
                    {
                        selectedPOSTData && (
                            <ModalForm method={'add'} selectedData={selectedPOSTData} setSelectedData={setDisease} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardListDisease
