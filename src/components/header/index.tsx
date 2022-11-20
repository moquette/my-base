import app from '../../../package.json'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}> {app.name}</p>
    </header>
  )
}

export default Header
