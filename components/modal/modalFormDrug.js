import { useState } from "react";
import { toast } from "react-toastify";

export default function ModalFormDrug({ method, selectedData, setSelectedData }) {
    const [selectedEditData, setSelectedEditData] = useState({
        ...selectedData
    });

    console.log(selectedData);

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

    const handleKegunaan = (element) => {
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    kegunaan: element.target.value
                }
            }
        })
    }

    const handleRules = (element) => {
        const drugs = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    rules: [...drugs]
                }
            }
        })
    }

    const handleWarning = (element) => {
        const diagonsis = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    warning: [...diagonsis]
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

    const handleDiseaseRelated = (element) => {
        const disease_related = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                id: prevState.id,
                data: {
                    ...prevState.data,
                    disease_related: [...disease_related]
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
        const idToast = toast.loading('Tunggu sebentar .....')
        
        try {
            if (method === 'PUT') {
                const rawResult = await fetch(`https://api-si-sehat.vercel.app/drug/${selectedEditData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedEditData.data)
                })
    
                const result = await rawResult.json()
                // setSelectedData(result.data)
                if (result.status === 'fail') throw result.message;
                toast.update(idToast, {render: 'berhasil diupdate', type: 'success', isLoading: false, autoClose: 5000})
                return;
            } 

            const rawResult = await fetch(`https://api-si-sehat.vercel.app/drug`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedEditData.data)
            })

            const result = await rawResult.json()

            if (result.status === 'fail') throw result.message;
            toast.update(idToast, {render: 'berhasil ditambah', type: 'success', isLoading: false, autoClose: 5000})
            console.log(result);
            setSelectedData((prevState) => {
                return [
                    ...prevState,
                    result.data
                ]
            })
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
                        <input type='text' value={selectedEditData.data.reviewer_name} onChange={handleReviewerName}/>
                    </span>
                    <span>
                        <label>publish_date </label>
                        <input type='text' value={selectedEditData.data.publish_date} disabled={true} onChange={handlePublishDate}/>
                    </span>
                </div>
            
                <div>
                    <label>Title: </label>
                    <input type='text' value={ selectedEditData.data.title } onChange={handleTitle} />
                </div>
                <div>
                    <label>Categories: </label>
                    <input type='text' value={ selectedEditData.data.categories } onChange={handleCategories} />
                </div>
                <div>
                    <label>about: </label>
                    <textarea type='text' value={ selectedEditData.data.about } onChange={handleAbout} />
                </div>
                <div>
                    <label>Penyakit Terkait: </label>
                    <input type='text' value={ selectedEditData.data.disease_related.toString() } onChange={handleDiseaseRelated} />    
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Aturan: </label>
                    <textarea type='text' value={ selectedEditData.data.rules.toString() } onChange={handleRules} />
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Peringatan: </label>
                    <textarea type='text' value={ selectedEditData.data.warning.toString() } onChange={handleWarning} />
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Kegunaan: </label>
                    <textarea type='text' value={ selectedEditData.data.kegunaan.toString() } onChange={handleKegunaan} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>                       
            </form>
        </div>
    )
}