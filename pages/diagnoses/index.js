import DiagnoseBar from '../../components/diagnose';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/footer';
import Link from 'next/link';
import DiagnoseStyle from '../../styles/Diagnose.module.css';
import Head from 'next/head';

export async function getServerSideProps(context) {
    const data = await fetch('https://api-si-sehat.vercel.app/drug')
    const result = await data.json();

    return {
        props: {
            result
        }
    }
}

export default function Diagnose({ result }) {
    console.log(result.datasDrug);
    return (
        <div>
            <Head>
                <title>Diagnosa Penyakit</title>
            </Head>

            <main>
                <NavBar />
                <div>
                    <DiagnoseBar />
                    {
                        result.datasDrug.map((value, key) => (
                            <div>
                                <li key={key}> {value.data.title} </li>
                                <li key={key}> {value.data.short_desc} </li>
                            </div>
                        ))
                    }
                </div>
                <Footer />
            </main>
        </div>
    )
}