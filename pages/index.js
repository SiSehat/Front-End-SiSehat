import Head from 'next/head';
import style from '../styles/Beranda.module.css';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RiHospitalFill } from 'react-icons/ri';
import { AiFillMedicineBox } from 'react-icons/ai';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Si Sehat</title>
      </Head>

      <main>
        <NavBar />
        <section className={style.jumbotron}>
          <div className={style.leftJumbotron}>
            <h2 className={style.jumbotronHeader}>Solusi Mudah untuk Kesehatan Anda</h2>
            <ul className={style.jumbotronList}>
              <li className={style.jumbotronItem}><BsCheckCircleFill className={style.icons} /> Dapatkan rekomendasi obat sesuai penyakit</li>
              <li className={style.jumbotronItem}><BsCheckCircleFill className={style.icons} /> Temukan rumah sakit terdekat dari lokasi Anda</li>
            </ul>
            <Link href='/diagnoses' className={style.buttonMedicineSeacrh}>Cari obat</Link>
          </div>
          <div className={style.rightJumbotron}>
            <div className={style.buttonRight}>
              <Link href='#' className={style.seacrhMedicine1}>
                <AiFillMedicineBox className={style.icons} /> Cari obat
              </Link>
              <Link href='/map' className={style.seacrhMedicine2}>
                <RiHospitalFill className={style.icons} /> Cari rumah sakit terdekat
              </Link>
            </div>
            <div className={style.backgroundRight}></div>
            <div className={style.nurse}></div>
          </div>
        </section>
        <h3 className={style.menuHeader}>Layanan</h3>
        <section className={style.menuSection}>
          <div className={style.menuItem}>
            <AiFillMedicineBox className={style.menuIcons} /> <strong>Cari obat </strong><p>Membantu Anda dalam menemukan obat sesuai kebutuhan</p>
          </div>
          <div className={style.menuItem}>
            <RiHospitalFill className={style.menuIcons} /> <strong>Cari rumah sakit terdekat </strong><p>Menampilkan rumah sakit terdekat dari lokasi Anda</p>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  )
}
