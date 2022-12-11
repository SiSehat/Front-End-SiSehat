import Router from "next/router"
import { useEffect } from "react"
import { authPage } from "../../middlewares/authorization"

export async function getServerSideProps(context) {
  const { email, redirect } = await authPage(context)

  if (redirect) {
    return { redirect }
  }

  return {
    props: {}
  }
}

const Dashboard = () => {

  useEffect(() => {
    const { pathname } = Router
    Router.push('/dashboard/diseases')
  }, [])
}

export default Dashboard
