import style from '../styles/Beranda.module.css';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';

const NavBar = () => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(!display)
    }

    return (
        <nav className={style.navbar}>
            <Link href="/" className={style.navSiSehat}>SiSehat</Link>
            <ul className={display ? style.navList.active : style.navList } >
                <li className={style.navItem}><Link href="/" className={style.navLink}>Beranda</Link></li>
                <li className={style.navItem}><Link href="/drugs" className={style.navLink}>Info Obat</Link></li>
                <li className={style.navItem}><Link href="/map" className={style.navLink}>Rumah Sakit Terdekat</Link></li>
            </ul>
            <div className='nav-bar__menu'>
                <button className={style.hamburger} onClick={handleClick}>{display ? <GrFormClose /> : <FiMenu /> }</button>
            </div>
        </nav>
    )
}

export default NavBar;