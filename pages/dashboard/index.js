import Router from "next/router"
import { useEffect } from "react"

// export async function getServerSideProps(context) {
//   return {
//     redirect: {
//       destination: '/dashboard/diseases'
//     }
//   }
// }

const Dashboard = () => {

  useEffect(() => {
    const { pathname } = Router
    Router.push('/dashboard/diseases')
  }, [])
}

export default Dashboard
