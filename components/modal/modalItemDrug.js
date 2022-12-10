export default function ModalItemDrug({ selectedData }) {

    return (
        <div className="modal-content">
            <span className="close">&times;</span>
            <div className='modal-head'>
                <span>{selectedData.reviewer_name}</span>
                <publish_date>{selectedData.publish_date}</publish_date>
            </div>
            <h3>{selectedData.title}</h3>
            <p>{selectedData.categories}</p>
            <p>{selectedData.about}</p>
            <p>warning 
                <ul>
                    {
                        selectedData.warning.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
            <p>Penggunaan / Aturan pakai
                <ul>
                    {
                        selectedData.rules.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
        </div>
    )
}