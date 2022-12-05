import style from '../styles/Beranda.module.css';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const NavBar = () => {
    const [display, setDisplay] = useState(false)

    // const hamburger = () => {
    //     setDisplay()
    // }

    return (
        <nav className={style.navbar}>
            <Link href="/" className={style.navSiSehat}>SiSehat</Link>
            <div className='nav-bar__menu'>
                <button className={style.hamburger}><FiMenu /></button>
            </div>
            <ul className={style.navList}>
                <li className={style.navItem}><Link href="/" className={style.navLink}>Beranda</Link></li>
                <li className={style.navItem}><Link href="/drugs" className={style.navLink}>Info Obat</Link></li>
                <li className={style.navItem}><Link href="#" className={style.navLink}>Rumah Sakit Terdekat</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;