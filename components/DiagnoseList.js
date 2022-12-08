import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Router from 'next/router'

const DiagnoseList = ({ diagnoses }) => {
  console.log(diagnoses)
  if (!diagnoses) {
    return (
      <div></div>
    )
  }

  const onRoutes = (id) => {
    Router.push(`/diagnoses/${id}`)
  }


  return (
    <section className={DiagnoseStyle.cardList}>
      <div>
        <h2 className={DiagnoseStyle.diagnose__title}>Kemungkinan Diagnosa</h2>
        <div id='diagnose__card' className={DiagnoseStyle.diagnose__card}>
          <Link href='#' className={DiagnoseStyle.diagnose__header}><h3>{diagnoses.title}</h3></Link>
          <p className={DiagnoseStyle.diagnose__desc}>{diagnoses.short_desc}</p>
          <button className={DiagnoseStyle.diagnose__detail} onClick={onRoutes.bind(this, diagnoses.id)}>Baca Selengkapnya <AiOutlineArrowRight /> </button>
          {/* <Link href={{pathname: '/diagnoses/', query:{id: `${diagnoses.id}`}}} className={DiagnoseStyle.diagnose__detail}>Baca Selengkapnya <AiOutlineArrowRight /> </Link> */}
        </div>
      </div>
    </section>
  )

}

export default DiagnoseList
