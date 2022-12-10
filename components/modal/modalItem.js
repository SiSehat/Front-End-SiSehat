export default function ModalItem({ selectedData }) {

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
            <p>Gejala 
                <ul>
                    {
                        selectedData.symptom.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
            <p>obat
                <ul>
                    {
                        selectedData.obat.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
        </div>
    )
}