import Head from 'next/head'
import Link from 'next/link'
import DashboardListDisease from '../../components/dashboard/DashboardListDisease'
import SideBar from '../../components/dashboard/SideBar'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>
      <header>
        <Link href="/" className='navSiSehat'>SiSehat</Link>
      </header>
      <main>
        <div className='wrapper-dashboard'>
          <SideBar />
          <DashboardListDisease />
        </div>
      </main>
    </>
  )
}

export default Dashboard
