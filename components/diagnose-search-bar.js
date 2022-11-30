import DiagnoseStyle from '../styles/Diagnose.module.css';

const DiagnoseSearchBar = () => {

    return (
        <div>
            <input className={DiagnoseStyle.input} placeholder='search name' />
            <button className={DiagnoseStyle.button}>Cari</button>
        </div>
    )
}

export default DiagnoseSearchBar;
