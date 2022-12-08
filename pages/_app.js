import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/FooterBar';
import '../styles/globals.css'
import '../styles/navbar/navbar.css'
import '../styles/map/map.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
        <ToastContainer />
      <Footer />
    </>
  )
}

export default MyApp
