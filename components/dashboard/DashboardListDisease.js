import { useEffect, useRef, useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import dataDisease from '../../data/template_disease';
import ModalForm from '../modal/modalForm';

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

const DashboardListDisease = ({ diseases }) => {

    if (diseases === null) return 
    
    const [sortColumn, setSortColumn] = useState('id');
    const [sortType, setSortType] = useState('asc');
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [selectedEditData, setSelectedEditData] = useState(null);
    const [selectedPOSTData, setSelectedPOSTData] = useState(null);
    const modal = useRef(null);

    setInterval(() => {
        setTime(new Date().toLocaleString('id'))
    }, 10000);

    const sortData = () => {
        
        if (sortColumn && sortType) {
        return diseases.sort((a, b) => {
            let x = a[sortColumn];
            let y = b[sortColumn];
            if (typeof x === 'string') {
                x = x.charCodeAt();
            }
            if (typeof y === 'string') {
                y = y.charCodeAt();
            }
            if (sortType === 'asc') {
                return x - y;
            } else {
                return y - x;
            }
        });
        }
        return data;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    const handleClick = (data, actionType) => {
        switch (actionType) {
            case 'detail':
                setSelectedData(data)   
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
                setSelectedPOSTData({data: dataDisease})
                modal.current.style.display = "block"
                window.onclick = function(event) {
                    if (event.target == modal.current) {
                      modal.current.style.display = "none";
                    }
                }
            break;
            
            case 'delete': 
                const confirmDelete = confirm(`Yakin ingin hapus data ${data.data.title} ?`)
                if (confirmDelete) {
                    handleRemoveDisease(data.id)
                }
            default:
                break;
        }
    };

    const handleRemoveDisease = async (id) => {
        try {
            const dataRaw = await fetch(`https://api-si-sehat.vercel.app/disease/${id}`, {
                method: 'DELETE'
            })
            const data = dataRaw.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(selectedData);
    console.log(selectedEditData);

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
                    data={sortData()}
                    sortColumn={sortColumn}
                    sortType={sortType}
                    onSortColumn={handleSortColumn}
                    loading={loading}
                    onRowClick={data => {
                        
                    }}
                    >
                    <Column width={150} fixed sortable>
                        <HeaderCell>Title</HeaderCell>
                        <Cell dataKey="data.title" />
                    </Column>

                    <Column width={200}  fixed sortable>
                        <HeaderCell
                        renderSortIcon={sortType => {
                            // console.log(sortType);

                            if (sortType === 'asc') {
                                return 1;
                            } else if (sortType === 'desc') {
                                return 2;
                            }

                            return 3;
                        }}
                        >
                        categories
                        </HeaderCell>
                        <Cell dataKey="data.categories" />
                    </Column>

                    <Column width={200} >
                        <HeaderCell>Pencegahan</HeaderCell>
                        <Cell dataKey="data.medication" />
                    </Column>

                    <Column width={300}>
                        <HeaderCell>reviewer_name</HeaderCell>
                        <Cell dataKey="data.reviewer_name" />
                    </Column>

                    <Column flexGrow={2}>
                        <HeaderCell>Action</HeaderCell>
                        <ActionCell dataKey="id" onClick={handleClick} />
                    </Column>
                </Table>

                
                {/* <!-- The Modal --> */}
                <div id="myModal" ref={modal} className="modal">

                    {/* <!-- Modal content --> */}
                    {
                        selectedData && (
                            <div className="modal-content">
                                <span className="close">&times;</span>
                                <div className='modal-head'>
                                    <span>{selectedData.data.reviewer_name}</span>
                                    <publish_date>{selectedData.data.publish_date}</publish_date>
                                </div>
                                <h3>{selectedData.data.title}</h3>
                                <p>{selectedData.data.categories}</p>
                                <p>{selectedData.data.about}</p>
                                <p>Gejala 
                                    <ul>
                                        {
                                            selectedData.data.symptom.map ((symptomData, i) => (
                                                <li key={i}>{symptomData}</li>
                                            ))
                                        }
                                    </ul>
                                </p>
                                <p>obat
                                    <ul>
                                        {
                                            selectedData.data.obat.map ((symptomData, i) => (
                                                <li key={i}>{symptomData}</li>
                                            ))
                                        }
                                    </ul>
                                </p>
                            </div>
                        )
                    }
                    {
                        selectedEditData && (
                            <ModalForm method={'PUT'} selectedData={selectedEditData} />
                        )
                    }
                    {
                        selectedPOSTData && (
                            <ModalForm method={'add'} selectedData={selectedPOSTData} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardListDisease
