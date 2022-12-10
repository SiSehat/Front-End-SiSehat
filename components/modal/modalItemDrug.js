export default function ModalItem({ selectedData }) {

    return (
        <div className="modal-content">
            <span className="close">&times;</span>
            <div className='modal-head'>
                <span>{selectedData.data.reviewer_name}</span>
                <publish_date>{selectedData.data.publish_date}</publish_date>
            </div>
            <h3>{selectedData.data.title}</h3>
            <p>{selectedData.data.categories}</p>
            <p>{selectedData.data.about}</p>
            <p>Gejala 
                <ul>
                    {
                        selectedData.data.symptom.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
            <p>obat
                <ul>
                    {
                        selectedData.data.obat.map ((symptomData, i) => (
                            <li key={i}>{symptomData}</li>
                        ))
                    }
                </ul>
            </p>
        </div>
    )
}