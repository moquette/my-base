import Footer from '@components/footer'
import useDocumentTitle from '@hooks/useDocumentTitle'

import { stylesMain } from './styles.module.scss'

type HomeProps = {
  pageTitle?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home: React.FunctionComponent<HomeProps> = (pageTitle) => (
  useDocumentTitle('React App'),
  (
    <div className={`text-lg ${stylesMain}`}>
      <p>It works!</p>
      <Footer />
    </div>
  )
)
