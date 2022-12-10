import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import '../styles/navbar/navbar.css'
import '../styles/map/map.css'
import '../styles/dashboard/dashboard.css'
import '../styles/dashboard/dashboard-responsive.css'
import '../styles/modal/modal.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
        <ToastContainer />
    </>
  )
}

export default MyApp
