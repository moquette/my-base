import Layout from '../../layout'
import { stylesMain } from './styles.module.scss'

export const Home = () => (
  <Layout documentTitle="Welcome">
    <div className={`text-lg ${stylesMain}`}>
      <p>It works!</p>
    </div>
  </Layout>
)
