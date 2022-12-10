import style from '../styles/Beranda.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <ul>
        <h3>SiSehat</h3>
        <li>Memberikan kemudahan menemukan obat <br/> sesuai kebutuhan demi kesehatan Anda </li>
      </ul>
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

  )

}

export default Footer
