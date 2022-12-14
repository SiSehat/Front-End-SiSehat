import Link from 'next/link'
import React, { useState } from 'react'
import { FaDisease } from 'react-icons/fa'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import { AiFillMedicineBox } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai';
import Cookies from 'js-cookie'

const SideBar = () => {
    const [display, setDisplay] = useState(false)

    const sidebarHandler = () => {
        setDisplay(!display)
    }

    const onLogoutHandler = () => {
        Cookies.remove('email')
    }

    return (
        <div className={ display ? `wrapper-sidebar-dashboard hide` : `wrapper-sidebar-dashboard` }>
            <div className='content-sidebar'>
                <div className='head-sidebar'>
                    <div className='title'>
                        <h2 className={``}>SiDashboard</h2>
                    </div>
                    <div className={`btn`}>
                        <button className={``} onClick={sidebarHandler}>{display ? <AiOutlineClose /> : <FiMenu />}</button>
                    </div>
                </div>
                <div className={display ? `item-sidebar item-sidebar-mobile` : `item-sidebar`}>
                    <Link href="/dashboard/diseases" className={``}><FaDisease /> <span>Daftar Penyakit</span></Link>
                </div>
                <div className={display ? `item-sidebar item-sidebar-mobile` : `item-sidebar`}>
                    <Link href="/dashboard/drugs" className={``}><AiFillMedicineBox /> <span>Daftar Obat</span></Link>
                </div>
                <div className={display ? `item-sidebar item-sidebar-mobile` : `item-sidebar`} onClick={onLogoutHandler}>
                    <Link href='/login' className={``}><FiLogOut /> <span>Keluar</span></Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar
