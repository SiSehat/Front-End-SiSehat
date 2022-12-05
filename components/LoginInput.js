import Link from "next/link";
import { useEffect, useState } from "react";
import style from '../styles/LoginRegis.module.css';

const LoginInput = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // useEffect(() => {
    const loginAPI = async ({ username, email, password }) => {
        const response = await fetch('https://api-si-sehat.vercel.app/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const result = await response.json()
        return result
    }
    // }, [])

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const data = await loginAPI({
            username: username,
            email: email,
            password: password,
        })
        console.log(data)
    }

    return (
        <>
        <section className={style.app_section}>
            <h1 className={style.app_title}>Selamat Datang</h1>
            <p className={style.app_paragraph}>Silakan masuk dengan akun Anda</p>
            <form onSubmit={onSubmitHandler} className={style.app_form}>
                <div className={style.form_input}>
                    <label className={style.input_label}>Username</label>
                    <input className={style.input__form} onChange={onChangeUsername} />
                </div>
                <div className={style.form_input}>
                    <label className={style.input_label}>Email</label>
                    <input className={style.input__form} onChange={onChangeEmail} />
                </div>
                <div className={style.form_input}>
                    <label className={style.input_label}>Password</label>
                    <input className={style.input__form} onChange={onChangePassword} />
                </div>
                <button type="submit" className={style.form_button}>Masuk</button>
                <small className={style.small}>Jika belum mempunyai akun silakan <Link href='/register' className={style.register__text}>Registrasi</Link></small>
            </form>
        </section>
        <section className={style.app_section2}>

        </section>
        </>
    )
}

export default LoginInput