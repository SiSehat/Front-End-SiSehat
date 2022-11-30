import NavBar from "../../components/nav-bar";
import Head from "next/head";
import Footer from "../../components/footer";
import ListDrugs from "../../components/ListDrugs";
import styleDrug from '../../styles/Drug.module.css';

const Drugs = () => {
    return (
        <div>
            <Head>
                <title>Informasi Obat</title>
            </Head>

            <main>
                <NavBar />
                <h2 className={styleDrug.header}>Cari Obat</h2>
                <div>
                    <input placeholder="Masukkan Nama Obat" className={styleDrug.input}/>
                    <button className={styleDrug.button}>Cari</button>
                </div>
                <ListDrugs />
            </main>
            <Footer />
        </div>
    )
}

export default Drugs;
