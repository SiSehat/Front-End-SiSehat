import Head from 'next/head'
import React from 'react'
import RegisterInput from '../../components/RegisterInput'

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
