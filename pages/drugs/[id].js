import Head from "next/head"
import Footer from "../../components/FooterBar"
import NavBar from "../../components/NavBar"
import style from "../../styles/DetailDisease.module.css"
import { BiArrowBack } from 'react-icons/bi'
import Link from "next/link"

const DetailMedicine = (props) => {
    console.log(props)
    return (
        <>
            <Head>
                <title>Tentang {props.title}</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className={style.disease__main}>
                <Link href="/drugs" className={style.back__arrow}><BiArrowBack />  Kembali Diagnosa</Link>
                <div className={style.disease__card}>
                    <h1 className={style.disease__title}>{props.title}</h1>
                    <img className={style.disease__image} src={props.thumbnail_url} />
                    <p className={style.disease__about} >{props.about}</p>
                    <p className={style.disease__obat}><strong>Kegunaan</strong> : {props.kegunaan}</p>
                    <h4>Gejala</h4>
                    <div className={style.disease__gejala}>
                        {props.warning.map((symptom, index) => {
                            return (
                                <ul key={index}>
                                    <li className={style.list__gejala}>{symptom}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <h4>Cara Menggunakan: </h4>
                    <p className={style.disease__about}>{props.rules}</p>
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
    const response = await fetch(`https://api-si-sehat.vercel.app/drug/${id}`)
    const data = await response.json()
    return {
        props: data.data
    }
}

export default DetailMedicine