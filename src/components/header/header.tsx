import './styles.scss'

import app from '../../../package.json'

interface HeaderProps {
  className?: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  className = 'app-header',
}) => {
  return (
    <header className={`${className}`}>
      <h1 className=" pb-5 font-bold uppercase">{app.name}</h1>
    </header>
  )
}
