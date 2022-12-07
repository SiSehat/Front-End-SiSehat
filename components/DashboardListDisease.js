import style from '../styles/DashboardDisease.module.css'

const DashboardListDisease = () => {

    return (
        <>
            <h3>Daftar Penyakit</h3>
            <div className={style.table__app}>
                <table className='display' id='table_show'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default DashboardListDisease
