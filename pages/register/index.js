import Head from 'next/head'
import React from 'react'
import RegisterInput from '../../components/RegisterInput'
import { unAuthPage } from '../../middlewares/authorization'

export async function getServerSideProps(context) {
  const { redirect } = await unAuthPage(context);

  if (redirect) {
      return { redirect }
  }

  return {
    props: {}
  }
}

const Register = () => {
  return (
    <>
        <Head>
            <title>Register</title>
        </Head>
        <main>
            <RegisterInput />
        </main>
    </>
  )
}

export default Register
