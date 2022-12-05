import Head from "next/head";
import { useState } from "react";
import DrugsList from "../../components/DrugsList";
import DrugsSearchBar from "../../components/DrugsSearchBar";
import styleDrug from '../../styles/Drug.module.css';

const Drugs = () => {
    const [medicines, setMedicines] = useState([])

    const onDrugsHandler = (drugs) => {
        setMedicines(drugs)
        // console.log(drugs)
    }

    return (
        <div>
            <Head>
                <title>Informasi Obat</title>
            </Head>

            <main className={styleDrug.main}>
                <h2 className={styleDrug.header}>Cari Obat</h2>
                <DrugsSearchBar onDrugsHandler={onDrugsHandler}/>
                <DrugsList medicines={medicines}/>
            </main>
        </div>
    )
}

export default Drugs;
