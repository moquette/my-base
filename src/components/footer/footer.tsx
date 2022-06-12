import './styles.scss'
import './styles.scss'

import app from '../../../package.json'

export const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        &copy;{new Date().getFullYear()} {app.name} v{app.version}
      </p>
    </footer>
  )
}
