import { useEffect, useState } from "react";
import Head from 'next/head'
import SideBar from "../../../components/dashboard/SideBar";
import DashboardListDisease from "../../../components/dashboard/DashboardListDisease";
import { authPage } from "../../../middlewares/authorization";

export async function getServerSideProps(context) {
    const { email, redirect } = await authPage(context)
    
    if (redirect) {
        return { redirect }
    }

    const diseaseRaw = await fetch('https://api-si-sehat.vercel.app/disease')
    const disease = await diseaseRaw.json()

    return {
        props: disease
    }
}

export default function Disease(props) {

    const [diseases, setDiseases] = useState(null);
    
    useEffect(() => {
        setDiseases(props.data)
    }, [])
    
    return (
        <>
            <Head>
                <title>
                Dashboard
                </title>
            </Head>
            <main>
                <div className='wrapper-dashboard'>
                    <SideBar />
                    <DashboardListDisease datas={diseases} />
                </div>
            </main>
        </>
    )
}