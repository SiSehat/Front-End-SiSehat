import Link from 'next/link'
import React, { useState } from 'react'
import { FaDisease } from 'react-icons/fa'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import { AiFillMedicineBox } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr';
import styleSideBar from '../styles/SideBar.module.css'

const SideBar = () => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div className={styleSideBar.nav_bar__menu}>
                <button className={styleSideBar.hamburger} onClick={handleClick}>{display ? <GrFormClose /> : <FiMenu />}</button>
            </div>
            <div className={styleSideBar.sidebar}>
                <div className={styleSideBar.list_bar}>
                    <h3 className={styleSideBar.list__header}>Admin</h3>
                </div>
                <div className={styleSideBar.list_bar}>
                    <Link href="#" className={styleSideBar.list__item}><FaDisease /> Daftar Penyakit</Link>
                </div>
                <div className={styleSideBar.list_bar}>
                    <Link href="#" className={styleSideBar.list__item}><AiFillMedicineBox /> Daftar Obat</Link>
                </div>
                <div className={styleSideBar.list_bar}>
                    <Link href='/login' className={styleSideBar.list__item}><FiLogOut /> Keluar</Link>
                </div>
            </div>
        </>
    )
}

export default SideBar
