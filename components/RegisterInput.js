import { useState } from "react"
import style from '../styles/LoginRegis.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const RegisterInput = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    const registerAPI = async ({ username, email, password }) => {
        const response = await fetch('https://api-si-sehat.vercel.app/register', {
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
        const data = await registerAPI({
            username: username,
            email: email,
            password: password,
        })
        if(data.status === 'success') {
            router.push('/login')
            toast.success('Berhasil Registrasi')
        } else {
            toast.error('Gagal Registrasi')
        }
        console.log(data)
    }

    return (
        <>
        <section className={style.app_section}>
            <h1 className={style.app_title}>Selamat Datang</h1>
            <p className={style.app_paragraph}>Silakan mengisi form pendaftaran tersebut</p>
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
                    <input className={style.input__form} onChange={onChangePassword} type="password"/>
                </div>
                <button type="submit" className={style.form_button}>Masuk</button>
            </form>
        </section>
        <section className={style.app_section2}>

        </section>
        </>
    )
}

export default RegisterInput