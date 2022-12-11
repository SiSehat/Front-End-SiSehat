import Link from "next/link";
import { useState } from "react";
import style from '../styles/LoginRegis.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const LoginInput = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // useEffect(() => {
    const loginAPI = async ({ username, email, password }) => {
        const idToast = toast.loading('Tunggu sebentar .....')
        try {
            const response = await fetch('https://api-si-sehat.vercel.app/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const result = await response.json()
            return {result, idToast}
        } catch (error) {
            const result = error
            return {result, idToast}
        }
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const { result, idToast } = await loginAPI({
            // username: username,
            email: email,
            password: password,
        })
        if(result.status === 'success') {
            e.preventDefault()
            toast.update(idToast, 
                { render: 'Login Berhasil', type: 'success', isLoading: false, autoClose: 5000 }
            )
            router.push('/dashboard#')
        } else {
            toast.update(idToast, 
                { render: 'Email / Password salah', type: 'error', isLoading: false, autoClose: 5000 }
            )
            console.log(result);
        }
    }

    return (
        <>
        <section className={style.app_section}>
            <h1 className={style.app_title}>Selamat Datang</h1>
            <p className={style.app_paragraph}>Silakan masuk dengan akun Anda</p>
            <form onSubmit={onSubmitHandler} className={style.app_form}>
                <div className={style.form_input}>
                    <label className={style.input_label}>Email</label>
                    <input className={style.input__form} onChange={onChangeEmail} />
                </div>
                <div className={style.form_input}>
                    <label className={style.input_label}>Password</label>
                    <input className={style.input__form} onChange={onChangePassword} type="password"/>
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