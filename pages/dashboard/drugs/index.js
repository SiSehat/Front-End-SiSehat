import Head from 'next/head'
import { useEffect, useState } from 'react'
import DashboardListDrug from '../../../components/dashboard/DashboardListDrug'
import SideBar from '../../../components/dashboard/SideBar'

export async function getServerSideProps(context) {
    const drugRaw = await fetch('https://api-si-sehat.vercel.app/drug')
    const drug = await drugRaw.json()

    return {
        props: drug
    }
}

export default function Drugs(props) {
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
                  <DashboardListDrug datas={props.datasDrug} />
              </div>
          </main>
      </>
  )
}