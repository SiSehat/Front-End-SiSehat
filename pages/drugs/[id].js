import React from 'react'

const DetailMedicine = (props) => {
    console.log(props)
  return (
    <div>DetailMedicine</div>
  )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const response = await fetch(`https://api-si-sehat.vercel.app/drug/${id}`)
    const data = await response.json()
    return {
        props: data
    }
}

export default DetailMedicine