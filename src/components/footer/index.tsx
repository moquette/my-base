import app from '../../../package.json'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerCopyright}>
        &copy;{new Date().getFullYear()} {app.name} v{app.version}
      </p>
    </footer>
  )
}

export default Footer
