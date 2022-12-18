import { useState } from "react";
import { toast } from "react-toastify";

export default function ModalFormDrug({ method, selectedData, setSelectedData }) {
    const [selectedEditData, setSelectedEditData] = useState({
        ...selectedData
    });

    const handleTitle = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                title: element.target.value.toLowerCase()
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

    const handleKegunaan = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                kegunaan: element.target.value
            }
        })
    }

    const handleRules = (element) => {
        const drugs = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                rules: [...drugs]
            }
        })
    }

    const handleWarning = (element) => {
        const diagonsis = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                warning: [...diagonsis]
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

    const handleDiseaseRelated = (element) => {
        const disease_related = element.target.value.split(';')
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                disease_related: [...disease_related]
            }
        })
    }

    const handleAbout = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                about: element.target.value,
                short_desc: element.target.value.slice(0, 1000)
            }
        })
    }

    const handlerThumbnailUrl = (element) => {
        setSelectedEditData((prevState) => {
            return {
                ...prevState,
                thumbnail_url: element.target.value ?? 'https://corporate.dukehealth.org/sites/default/files/api/images/aspect:1.25-width:768-position:center/2022-10/Pill%20Bottle.jpg'
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
                    body: JSON.stringify(selectedEditData)
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
                body: JSON.stringify(selectedEditData)
            })

            const result = await rawResult.json()

            if (result.status === 'fail') throw result.message;
            toast.update(idToast, {render: 'berhasil ditambah', type: 'success', isLoading: false, autoClose: 5000})
            console.log(result);
            setSelectedData((prevState) => {
                return [
                    ...prevState,
                    {
                        ...result.data.data,
                        id: result.data.id
                    }
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
                    <label>image url: </label>
                    <input type='text' value={ selectedEditData.thumbnail_url } onChange={handlerThumbnailUrl} />
                </div>
                <div>
                    <label>about: </label>
                    <textarea type='text' value={ selectedEditData.about } onChange={handleAbout} />
                </div>
                <div>
                    <label>Penyakit Terkait: </label>
                    <input type='text' value={ selectedEditData.disease_related.toString() } onChange={handleDiseaseRelated} />    
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Aturan: </label>
                    <textarea type='text' value={ selectedEditData.rules.toString() } onChange={handleRules} />
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Peringatan: </label>
                    <textarea type='text' value={ selectedEditData.warning.toString() } onChange={handleWarning} />
                    <p>lebih dari 1 ? tambahkan dengan koma (;) </p>
                </div>
                <div>
                    <label>Kegunaan: </label>
                    <textarea type='text' value={ selectedEditData.kegunaan.toString() } onChange={handleKegunaan} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>                       
            </form>
        </div>
    )
}