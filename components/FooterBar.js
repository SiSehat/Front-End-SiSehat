import style from '../styles/Beranda.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>SiSehat</h3>
        <p>Memberikan kemudahan menemukan obat <br /> sesuai kebutuhan demi kesehatan Anda </p>
      </div>
      <ul>
        <h3>Layanan</h3>
        <li><Link href="/drugs">Rekomendasi Obat</Link></li>
        <li><Link href="#">Rumah Sakit Terdekat</Link></li>
      </ul>
      <ul>
        <h3>Info Obat</h3>
        <li><Link href="#">Sakit Kepala</Link></li>
        <li><Link href="#">dll</Link></li>        
      </ul>
    </footer>
    // <footer>
    //     <div className={style.footerLeft}>
    //       <h3>SiSehat</h3>
    //       <p>Memberikan kemudahan menemukan obat <br/> sesuai kebutuhan demi kesehatan Anda </p>
    //     </div>
    //     <div className={style.footerRight}>
    //       <div className={style.footerList1}>
    //         <h3>Layanan</h3>
    //         <Link href="#">Rekomendasi Obat</Link>
    //         <Link href="#">Rumah Sakit Terdekat</Link>
    //       </div>
    //       <div className={style.footerList2}>
    //         <h3>Info Obat</h3>
    //         <Link href="#">Sakit Kepala</Link>
    //         <Link href="#">dll</Link>
    //       </div>
    //     </div>
    //   </footer>
  )

}

export default Footer
