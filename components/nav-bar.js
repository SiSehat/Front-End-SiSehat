import style from '../styles/Beranda.module.css';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={style.navbar}>
            <Link href="/" className={style.navSiSehat}>SiSehat</Link>
            <ul className={style.navList}>
                <li className={style.navItem}><Link href="/" className={style.navLink}>Beranda</Link></li>
                <li className={style.navItem}><Link href="/drugs" className={style.navLink}>Info Obat</Link></li>
                <li className={style.navItem}>Rumah Sakit Terdekat</li>
            </ul>
        </nav>
    )
}

export default NavBar;