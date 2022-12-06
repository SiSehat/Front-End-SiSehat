import Head from 'next/head'
import DashboardListDisease from '../../components/DashboardListDisease'
import SideBar from '../../components/SideBar'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>
      {/* <SideBar /> */}
      <main>
        <DashboardListDisease />
      </main>
    </>
  )
}

export default Dashboard
