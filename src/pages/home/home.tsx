import Footer from '@components/footer'

import { stylesMain } from './styles.module.scss'

type HomeProps = {
  pageTitle?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home: React.FunctionComponent<HomeProps> = (pageTitle) => (
  <div className={`text-lg ${stylesMain}`}>
    <p>It works!</p>
    <Footer />
  </div>
)
