import './styles.scss'

import { Link } from 'react-router-dom'

import Layout from '../../layout'

export const NotFound = () => (
  <Layout documentTitle="404: Page Not Found" className="not-found">
    <p>404: Page Not Found.</p>
    <Link to="/" className="underline">
      Return Home
    </Link>
  </Layout>
)

export default NotFound
