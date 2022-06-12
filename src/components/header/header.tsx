import './styles.scss'

import app from '../../../package.json'

export const Header = () => {
  return (
    <header className="app-header">
      <h2 className="app-header__title">{app.name}</h2>
    </header>
  )
}
