export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/dashboard/diseases'
    }
  }
}

const Dashboard = () => {}

export default Dashboard
