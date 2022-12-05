import Head from "next/head"
import LoginInput from "../../components/LoginInput"

const Login = () => {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main>
                <LoginInput />
            </main>
        </>
    )
}

export default Login