import Head from "next/head"
import Footer from "../../components/FooterBar"
import NavBar from '../../components/navbar/NavBar';
import style from "../../styles/DetailDisease.module.css"
import { BiArrowBack } from 'react-icons/bi'
import Link from "next/link"

const DiagnoseIdPage = (props) => {
    // console.log(props)
    return (
        <>
            <Head>
                <title>Tentang {props.title}</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className={style.disease__main}>
                <Link href="/diagnoses" className={style.back__arrow}><BiArrowBack />  Kembali Diagnosa</Link>
                <div className={style.disease__card}>
                    <h1 className={style.disease__title}>{props.title}</h1>
                    <img className={style.disease__image} src={props.thumbnail_url} />
                    <p className={style.disease__about} >{props.about}</p>
                    <p className={style.disease__obat}><strong>Obat</strong> : {props.obat}</p>
                    <h4>Gejala</h4>
                    <di className={style.disease__gejala}>
                        {props.symptom.map((symptom, index) => {
                            return (
                                <ul key={index}>
                                    <li className={style.list__gejala}>{symptom}</li>
                                </ul>
                            )
                        })}
                    </di>
                    <h4>Diagnosa</h4>
                    <di>
                        {props.diagonsis.map((diagnose, index) => {
                            return (
                                <ul key={index}>
                                    <li className={style.list__diagnose}>{diagnose}</li>
                                </ul>
                            )
                        })}
                    </di>
                    <h4>Cara Mengobati: </h4>
                    <p className={style.disease__about}>{props.medication}</p>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const response = await fetch(`https://api-si-sehat.vercel.app/disease/${id}`)
    const data = await response.json()
    return {
        props: data.data
    }
}

export default DiagnoseIdPage