import { Link } from 'react-router-dom'

import Layout from '../../layout'
import { stylesMain } from './styles.module.scss'

export const NotFound = () => (
  <Layout documentTitle="404: Page Not Found">
    <div className={`text-lg ${stylesMain}`}>
      <p>404: Page Not Found.</p>
      <Link to="/" className="underline">
        Return Home
      </Link>
    </div>
  </Layout>
)
