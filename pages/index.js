import Head from 'next/head';
import style from '../styles/Beranda.module.css';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RiHospitalFill } from 'react-icons/ri';
import { AiFillMedicineBox } from 'react-icons/ai';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/FooterBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Si Sehat</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <section className={style.jumbotron}>
          <div className={style.leftJumbotron}>
            <h2 className={style.jumbotronHeader}>Solusi Mudah untuk Kesehatan Anda</h2>
            <ul className={style.jumbotronList}>
              <li className={style.jumbotronItem}><BsCheckCircleFill className={style.icons} /> Dapatkan rekomendasi obat sesuai penyakit</li>
              <li className={style.jumbotronItem}><BsCheckCircleFill className={style.icons} /> Temukan rumah sakit terdekat dari lokasi Anda</li>
            </ul>
            <div className={style.buttonDiagnoses}>
              <Link href='/diagnoses' className={style.buttonMedicineSeacrh}>Mulai Diagnosa</Link>
            </div>
          </div>
          <div className={style.nurse}></div>
        </section>
        <h3 className={style.menuHeader}>Layanan</h3>
        <section className={style.menuSection}>
          <Link href='/drugs'>
            <div className={style.menuItem}>
              <AiFillMedicineBox className={style.menuIcons} /> <strong>Cari obat </strong><p>Membantu Anda dalam menemukan obat sesuai kebutuhan</p>
            </div>
          </Link>
          <Link href='/map'>
            <div className={style.menuItem}>
              <RiHospitalFill className={style.menuIcons} /> <strong>Cari rumah sakit terdekat </strong><p>Menampilkan rumah sakit terdekat dari lokasi Anda</p>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}