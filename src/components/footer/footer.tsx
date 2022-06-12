import './styles.scss'
import './styles.scss'

import app from '../../../package.json'

interface FooterProps {
  className?: string
}

export const Footer: React.FunctionComponent<FooterProps> = ({
  className = 'app-footer',
}) => {
  return (
    <footer className={`${className}`}>
      <p>
        &copy;{new Date().getFullYear()} {app.name} v{app.version}
      </p>
    </footer>
  )
}
