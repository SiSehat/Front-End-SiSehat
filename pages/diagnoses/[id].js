import React from 'react'

const DiagnoseIdPage = () => {
    const diagnoseDetail = async (id) => {
        const response = await fetch(`https://api-si-sehat.vercel.app/disease/${id}`)
        const data = await response.json()
        console.log(data)
    }
    return (
        <div>
            <button onClick={diagnoseDetail}>kakakks</button>
        </div>
    )
}

// export const getStaticPaths = async ({ params }) => {
//     const response = await fetch(`https://api-si-sehat.vercel.app/disease`)
//     const data = await response.json()

//     const paths = data.map((item) => ({
//         params: {
//             id: `${item.id}`
//         }
//     }))
//     return {
//         paths,
//         fallback: false
//     }

// }

// export const getStaticProps = async () => {
//     const response = await fetch(`https://api-si-sehat.vercel.app/disease/${id}`)
//     const data = await response.json()

//     return {
//         params: {
//             disease: data
//         }
//     }
// }

export default DiagnoseIdPage