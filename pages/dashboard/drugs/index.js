import Head from 'next/head'
import Link from 'next/link'
import DashboardListDisease from '../../components/dashboard/DashboardListDisease'
import SideBar from '../../components/dashboard/SideBar'
import Footer from '../../components/FooterBar'

export default function Drugs() {
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
              <DashboardListDisease />
            </div>
          </main>
        </>
    )
}