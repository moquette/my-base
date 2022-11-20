import Footer from '@components/footer'
import Header from '@components/header'
import useDocumentTitle from '@hooks/useDocumentTitle'
import React, { ReactNode } from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './styles.module.css'

interface LayoutProps {
  documentTitle?: string
  className?: string
  children: ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  documentTitle,
  className,
  children,
}) => {
  const title = documentTitle ? `${documentTitle} | React App` : 'React App'
  const appClass = className ? `app ${className}` : 'app'
  useDocumentTitle(title)
  return (
    <div className={styles.app + `${appClass}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
