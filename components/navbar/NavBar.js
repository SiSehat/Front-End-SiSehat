import style from '../../styles/Beranda.module.css';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import { useRouter, withRouter } from 'next/router';

function Navbar() {
    const [display, setDisplay] = useState(false)
    const router = useRouter();

    const handleClick = () => {
        setDisplay(!display)
    }
    const navs = [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "map",
          href: "/map",
        },
        {
          text: "drugs",
          href: "/drugs",
        },
        {
          text: "diagnoses",
          href: "/diagnoses",
        },
      ];

    if (router.pathname === undefined)  return (
      <>
        <h1>Mohon direfresh web anda</h1>
      </>
    );

    return (
        <nav className={style.navbar}>
            <Link href="/" className='navSiSehat'>SiSehat</Link>
            <ul className={display ? style.navList.active : 'navList' } >
                { navs.map( (value, i) =>
                    <li key={i} className='__navItem'>
                      <Link href={value.href} className={`nav-item ${router.pathname === value.href ? `active ${style.navLink}` : ''}`}>
                            {value.text}
                        </Link>
                    </li>
                )}
            </ul>
            <div className='nav-bar__menu'>
                <button className={style.hamburger} onClick={handleClick}>{display ? <GrFormClose /> : <FiMenu /> }</button>
            </div>
        </nav>
    )
}

export default Navbar