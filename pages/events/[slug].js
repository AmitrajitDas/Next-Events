import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const EventPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <div>Event Page</div>
    </Layout>
  )
}

export default EventPage
