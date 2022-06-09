import './styles.module.scss'

import Layout from '../../layout'

export const Home = () => (
  <Layout documentTitle="Welcome">
    <p className=" pb-5 font-bold uppercase">My Base</p>
    <h2 className="font-bold">Development Stack:</h2>
    <ul className="pb-5">
      <li>React / React Router </li>
      <li>Webpack / Bundle Analyzer</li>
      <li>TailwindCSS / Automatic Class Sorting</li>
      <li>Sass / Less / PostCSS</li>
      <li>TypeScript / Babel</li>
      <li>ESLint / Prettier / Airbnb</li>
      <li>Husky / Lint-Staged </li>
    </ul>
    <p>
      Edit: <code>src/pages/home/home.tsx</code> and save to reload.
    </p>
  </Layout>
)
