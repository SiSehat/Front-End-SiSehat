import { useState } from "react";
import { toast } from "react-toastify";

export default function ModalForm({ method, selectedData, setSelectedData }) {
    const [selectedEditData, setSelectedEditData] = useState({
        ...selectedData
    });

    console.log(selectedEditData);
    const handleTitle = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                title: element.target.value
            }
        })
    }

    const handleReviewerName = (element) => {
        handlePublishDate();
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                reviewer_name: element.target.value
            }
        })
    }

    const handlePublishDate = () => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                publish_date: new Date().toISOString().toString()
                
            }
        })
    }

    const handleSymptom = (element) => {
        const symptoms = element.target.value.split(',')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                symptom: [...symptoms]
            }
        })
    }

    const handleObat = (element) => {
        const drugs = element.target.value.split(',')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                obat: [...drugs]
                
            }
        })
    }

    const handleDiagnosis = (element) => {
        const diagonsis = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                diagonsis: [...diagonsis]
            }
        })
    }

    const handleCategories = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                categories: element.target.value
            }
        })
    }

    const handleMedication = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                medication: element.target.value
            }
        })
    }

    const handleAbout = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                about: element.target.value,
                short_desc: element.target.value.slice(0, 1000),
                thumbnail_url: 'not_allowed'
            }
        })
    }

    const handlerSubmit = async (element) => {
        element.preventDefault();
        console.log(selectedEditData);
        const idToast = toast.loading('Tunggu sebentar .....')
        
        try {
            if (method === 'PUT') {
                const rawResult = await fetch(`https://api-si-sehat.vercel.app/disease/${selectedEditData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedEditData)
                })
    
                const result = await rawResult.json()
                // setSelectedData(result.data)
                if (result.status === 'fail') throw result.message;
                toast.update(idToast, {render: 'berhasil diupdate', type: 'success', isLoading: false, autoClose: 5000})
                return;
            } 

            const rawResult = await fetch(`https://api-si-sehat.vercel.app/disease`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedEditData)
            })

            const result = await rawResult.json()

            if (result.status === 'fail') throw result.message;
            toast.update(idToast, {render: 'berhasil ditambah', type: 'success', isLoading: false, autoClose: 5000})
            setSelectedData((prevState) => [
                ...prevState,
                result.data
            ])
        } catch (error) {
            console.log(error);
            toast.update(idToast, {render: `${error[0].context.label} wajib diisi`, type: 'error', isLoading: false, autoClose: 5000})
        }

        toast.clearWaitingQueue()
    }

    return (
        <div className="modal-content">
            <span className="close">&times;</span>
            <form onSubmit={handlerSubmit}>
                <div className="modal-multiple-form">
                    <span>
                        <label>Reviewer Name </label>
                        <input type='text' value={selectedEditData.reviewer_name} onChange={handleReviewerName}/>
                    </span>
                    <span>
                        <label>publish_date </label>
                        <input type='text' value={selectedEditData.publish_date} disabled={true} onChange={handlePublishDate}/>
                    </span>
                </div>
            
                <div>
                    <label>Title: </label>
                    <input type='text' value={ selectedEditData.title } onChange={handleTitle} />
                </div>
                <div>
                    <label>Categories: </label>
                    <input type='text' value={ selectedEditData.categories } onChange={handleCategories} />
                </div>
                <div>
                    <label>about: </label>
                    <textarea type='text' value={ selectedEditData.about } onChange={handleAbout} />
                </div>
                <div>
                    <label>symptom: </label>
                    <input type='text' value={ selectedEditData.symptom.toString() } onChange={handleSymptom} />    
                    <p>lebih dari 1 ? tambahkan dengan koma (,) </p>
                </div>
                <div>
                    <label>obat: </label>
                    <textarea type='text' value={ selectedEditData.obat.toString() } onChange={handleObat} />
                    <p>lebih dari 1 ? tambahkan dengan koma (,) </p>
                </div>
                <div>
                    <label>Diagnosis: </label>
                    <textarea type='text' value={ selectedEditData.diagonsis.toString() } onChange={handleDiagnosis} />
                    <p>lebih dari 1 ? tambahkan dengan koma (,) </p>
                </div>
                <div>
                    <label>Pencegahan: </label>
                    <textarea type='text' value={ selectedEditData.medication.toString() } onChange={handleMedication} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>                       
            </form>
        </div>
    )
}