import Footer from '@components/footer'
import useDocumentTitle from '@hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

import { stylesMain } from './styles.module.scss'

export const NotFound = () => (
  useDocumentTitle('404: Page Not Found'),
  (
    <div className={`text-lg ${stylesMain}`}>
      <p>404: Page Not Found.</p>
      <Link to="/" className="underline">
        Return Home
      </Link>
      <Footer />
    </div>
  )
)
