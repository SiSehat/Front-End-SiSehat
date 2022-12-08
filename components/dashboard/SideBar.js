import Link from 'next/link'
import React, { useState } from 'react'
import { FaDisease } from 'react-icons/fa'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import { AiFillMedicineBox } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr';

const SideBar = () => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => {
        setDisplay(!display)
    }

    return (
        <div className='wrapper-sidebar'>
            <div className='content-sidebar'>
                <div className='head-sidebar'>
                    <div className='title'>
                        <h2 className={``}>SiDashboard</h2>
                    </div>
                    <div className={``}>
                        <button className={``} onClick={handleClick}>{display ? <GrFormClose /> : <FiMenu />}</button>
                    </div>
                </div>
                <div className={`item-sidebar`}>
                    <Link href="#" className={``}><FaDisease /> Daftar Penyakit</Link>
                </div>
                <div className={`item-sidebar`}>
                    <Link href="#" className={``}><AiFillMedicineBox /> Daftar Obat</Link>
                </div>
                <div className={`item-sidebar`}>
                    <Link href='/login' className={``}><FiLogOut /> Keluar</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar
