import style from '../styles/Home.module.css';
import Disease from './disease';

const Diagnose = () => {
  return (
    <div className={style.diagnoses}>
      <h2>Diagnosa Penyakit</h2>
      <p>Kami membantu mendeteksi dini penyakit dan memberikan rekomendasi obat sesuai dengan kebutuhan Anda</p>
      <div>
        <input placeholder='search name' />
        <button>Cari</button>
      </div>
      <Disease />
    </div>
  )
}



export default Diagnose;