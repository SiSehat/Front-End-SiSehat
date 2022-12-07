import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'


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
