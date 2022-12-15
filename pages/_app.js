import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import '../styles/navbar/navbar.css'
import '../styles/map/map.css'
import '../styles/map/map-responsive.css'
import '../styles/dashboard/dashboard.css'
import '../styles/dashboard/dashboard-responsive.css'
import '../styles/modal/modal.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
        <meta name="dicoding:email" content="dhinorahmad0@gmail.com" />
      </Head>
      <Loading />
      <Component {...pageProps} />
        <ToastContainer />
    </>
  )
}

export default MyApp
