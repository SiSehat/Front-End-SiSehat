import { useState } from "react";

export default function ModalForm({ method, selectedData }) {
    const [selectedEditData, setSelectedEditData] = useState({
        ...selectedData
    });

    const handleTitle = (element) => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    title: element.target.value
                }
            }
        })
    }

    const handleReviewerName = (element) => {
        handlePublishDate();
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    reviewer_name: element.target.value
                }
            }
        })
    }

    const handlePublishDate = () => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    publish_date: new Date().toISOString().toString()
                }
            }
        })
    }

    const handleSymptom = (element) => {
        const symptoms = element.target.value.split(',')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    symptom: [...symptoms]
                }
            }
        })
    }

    const handleObat = (element) => {
        const drugs = element.target.value.split(',')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    obat: [...drugs]
                }
            }
        })
    }

    const handleDiagnosis = (element) => {
        const diagonsis = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    diagonsis: [...diagonsis]
                }
            }
        })
    }

    const handleCategories = (element) => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    categories: element.target.value
                }
            }
        })
    }

    const handleMedication = (element) => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    medication: element.target.value
                }
            }
        })
    }

    const handleAbout = (element) => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    about: element.target.value,
                    short_desc: element.target.value.slice(0, 1000),
                    thumbnail_url: 'not_allowed'
                }
            }
        })
    }

    const handlerSubmit = async (element) => {
        element.preventDefault();
        console.log(selectedEditData);
        
        try {
            if (method === 'PUT') {
                const rawResult = await fetch(`https://api-si-sehat.vercel.app/disease/${selectedEditData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedEditData.data)
                })
    
                const result = await rawResult.json()
                // setSelectedData(result.data)
                console.log(result);
                return;
            } 

            console.log(selectedEditData);

            const rawResult = await fetch(`https://api-si-sehat.vercel.app/disease`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedEditData.data)
            })

            const result = await rawResult.json()
            // setSelectedData(result.data)
            console.log(result);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div className="modal-content">
            <form onSubmit={handlerSubmit}>
                <span className="close">&times;</span>
                <label>Reviewer Name </label>
                <input type='text' value={selectedEditData.data.reviewer_name} onChange={handleReviewerName}/>
                <label>publish_date </label>
                <input type='text' value={selectedEditData.data.publish_date} disabled={true} onChange={handlePublishDate}/>
            
            
                <label>Title: </label>
                <input type='text' value={ selectedEditData.data.title } onChange={handleTitle} />
            
            
                <label>Categories: </label>
                <input type='text' value={ selectedEditData.data.categories } onChange={handleCategories} />
            
            
                <label>about: </label>
                <textarea type='text' value={ selectedEditData.data.about } onChange={handleAbout} />
            
            
                <label>symptom: </label>
                <textarea type='text' value={ selectedEditData.data.symptom.toString() } onChange={handleSymptom} />
            
            
                <label>obat: </label>
                <textarea type='text' value={ selectedEditData.data.obat.toString() } onChange={handleObat} />
            
            
                <label>Diagnosis: </label>
                <textarea type='text' value={ selectedEditData.data.diagonsis.toString() } onChange={handleDiagnosis} />
            
            
                <label>Pencegahan: </label>
                <textarea type='text' value={ selectedEditData.data.medication.toString() } onChange={handleMedication} />
            
            
                <button type='submit'>Submit</button>
                        
            </form>
        </div>
    )
}