import './styles.module.scss'

import Layout from '../../layout'

export const Home = () => (
  <Layout documentTitle="Welcome">
    <p className="pb-5 font-bold">Ready Developer One!</p>
    <h2 className="font-bold">Dev Stack</h2>
    <ul className="pb-5">
      <li>React </li>
      <li>React Router </li>
      <li>Webpack</li>
      <li>Webpack Bundle Analyzer</li>
      <li>TailwindCSS</li>
      <li>Babel</li>
      <li>SASS</li>
      <li>LESS</li>
      <li>TypeScript</li>
      <li>Prettier + ESLint</li>
      <li>Husky / Lint-Staged </li>
    </ul>
    <p>
      Edit: <code>src/pages/home/home.tsx</code> and save to reload.
    </p>
  </Layout>
)
