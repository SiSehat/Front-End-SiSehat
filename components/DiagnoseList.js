import DiagnoseStyle from '../styles/Diagnose.module.css'
import Link from 'next/link'


const DiagnoseList = ({ diagnoses }) => {
  console.log(diagnoses)
  if (!diagnoses) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <h2>Kemungkinan Diagnosa</h2>
      <div id='disease__card' className={DiagnoseStyle.disease__card}>
        <Link href='#' className={DiagnoseStyle.disease__header}><h3>{diagnoses.title}</h3></Link>
        <p className={DiagnoseStyle.disease__desc}>{diagnoses.short_desc}</p>
      </div>
    </section>
  )

}

export default DiagnoseList
