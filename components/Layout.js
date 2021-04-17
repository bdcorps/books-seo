import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      <Container className="max-w-xl mx-auto">
        {children}
      </Container>
      <br></br>
      <hr />
      <br></br>
      <div className="text-center space-y-5 mb-5">
        <h2 className="text-xl">Discover curated books on 100+ topics</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Try Bookify free for 7 days</button>
      </div>
    </>
  )
}

export default Layout