import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import { useEffect, useState } from 'react';


const data = [
    { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
    { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
    { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
];
  

const DashboardListDisease = () => {

    const [sortColumn, setSortColumn] = useState('id');
    const [sortType, setSortType] = useState('asc');
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(null);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString('id'))
        }, 3000);
    })

    const sortData = () => {
        if (sortColumn && sortType) {
        return data.sort((a, b) => {
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
                    <Column  align="center" fixed sortable>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column  fixed sortable>
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
                        Name
                        </HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                    <Column  >
                        <HeaderCell>Email</HeaderCell>
                        <Cell dataKey="email" />
                    </Column>

                    <Column flexGrow={2}>
                        <HeaderCell>Avatar</HeaderCell>
                        <Cell dataKey="avatar" />
                    </Column>
                </Table>
            </div>
        </div>

    )
}

export default DashboardListDisease
