import DiagnoseBar from '../../components/diagnose';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import Link from 'next/link';
import DiagnoseStyle from '../../styles/Diagnose.module.css';
import Head from 'next/head';

export default function Diagnose() {
    return (
        <div>
            <Head>
                <title>Diagnosa Penyakit</title>
            </Head>

            <main>
                <NavBar />
                <div>
                    <DiagnoseBar />
                </div>
                <Footer />
            </main>
        </div>
    )
}