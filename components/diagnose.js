import DiagnoseStyle from '../styles/Diagnose.module.css';
import DiagnoseSearchBar from './diagnose-search-bar';
import Disease from './disease';

const Diagnose = () => {
  return (
    <div className={DiagnoseStyle.diagnoses}>
      <h2 className={DiagnoseStyle.header}>Diagnosa Penyakit</h2>
      <p className={DiagnoseStyle.paragraph}>Kami membantu mendeteksi dini penyakit dan memberikan rekomendasi obat sesuai dengan kebutuhan Anda</p>
      <DiagnoseSearchBar />
      <Disease />
    </div>
  )
}



export default Diagnose;