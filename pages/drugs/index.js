import Head from "next/head";
import ListDrugs from "../../components/ListDrugs";
import styleDrug from '../../styles/Drug.module.css';


const Drugs = () => {
    return (
        <div>
            <Head>
                <title>Informasi Obat</title>
            </Head>

            <main>
                <h2 className={styleDrug.header}>Cari Obat</h2>
                <div>
                    <input placeholder="Masukkan Nama Obat" className={styleDrug.input}/>
                    <button className={styleDrug.button}>Cari</button>
                </div>
                <ListDrugs />
            </main>
        </div>
    )
}

export default Drugs;
