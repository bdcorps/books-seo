import Layout from '../components/Layout'
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps} />
    </Layout>)
}

export default MyApp
