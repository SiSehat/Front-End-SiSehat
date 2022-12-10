import Head from "next/head";
import { useState } from "react";
import DrugsList from "../../components/DrugsList";
import DrugsSearchBar from "../../components/DrugsSearchBar";
import styleDrug from '../../styles/Drug.module.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from "../../components/FooterBar";

export async function getServerSideProps(context) {
    const dataRaws = await fetch(`https://api-si-sehat.vercel.app/drug`);
    const dataDrugs = await dataRaws.json();

    return {
        props: dataDrugs
    }
}

const Drugs = ({ data }) => {
    const [medicines, setMedicines] = useState(() => data)

    const onDrugsHandler = (drugs) => {
        setMedicines(drugs)
    }

    return (
        <div>
            <Head>
                <title>Informasi Obat</title>
            </Head>
            <header>
                <NavBar active="drugs" />
            </header>
            <main className={styleDrug.main}>
                <h2 className={styleDrug.header}>Cari Obat</h2>
                <DrugsSearchBar onDrugsHandler={onDrugsHandler} />
                <DrugsList medicines={medicines} />
            </main>
            <Footer />
        </div>
    )
}

export default Drugs;
