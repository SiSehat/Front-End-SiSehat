import { AiOutlineArrowRight } from 'react-icons/ai'
import Router from 'next/router'
import { kapitalisasiKata } from '../pages/utils/util'

const DiagnoseList = ({ diagnoses }) => {
  if (!diagnoses) {
    return (
      <div></div>
    )
  }

  return (
    <section className={'cardList'}>
      <h2 className={`diagnose__title`}>Kemungkinan Diagnosa
      </h2>
      <span>
        <p><b style={{color: '#00A376', fontSize: '30px'}}> ■ </b> Kemungkinan terbesar</p>
        <p><b style={{color: '#d1d1d1', fontSize: '30px'}}> ■ </b> Kemungkinan lain</p>
      </span>

      <span className={diagnoses.length > 5 ? 'wrap' : ''}>
        {diagnoses.map((dataDisease, index) => {
          if (dataDisease.id == null) return null;
          return cardItemPriority(dataDisease, index, diagnoses.length)
        })}
      </span>
    </section>
  )

}

const cardItemPriority = (dataDisease, key, total) => {
  const onRoutes = (id) => {
    Router.push(`/diagnoses/${id}`)
  }

  const widthItemDiagnose = (total, key) => {
    let className = ''
    if (key == 0 ){
      className = `diagnose__card priority`
    } else {
      className = `diagnose__card releated`
    }

    return (total < 5) ? `${className} fullWidth` : `${className} cardWidth`;
  }
  
  return (
      <div id='diagnose__card' 
        key={key} 
        className={widthItemDiagnose(total, key)}
        onClick={onRoutes.bind(this, dataDisease.id)}>
        <h3>{kapitalisasiKata(dataDisease.title)}</h3>
        <p className={`diagnose__desc`}>{dataDisease.short_desc}</p>
        <button className={`diagnose__button_to_detail`}>Baca Selengkapnya <AiOutlineArrowRight /> </button>
      </div>
  )
}

export default DiagnoseList
