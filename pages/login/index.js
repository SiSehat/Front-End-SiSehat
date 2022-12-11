import Head from "next/head"
import LoginInput from "../../components/LoginInput"
import { unAuthPage } from "../../middlewares/authorization"

export async function getServerSideProps(context) {
    const { redirect } = await unAuthPage(context);

    if (redirect) {
        return { redirect }
    }
    
    return {
        props: {}
    }
}

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