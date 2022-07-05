/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.scss'

import Footer from '@components/footer'
import Header from '@components/header'
import useDocumentTitle from '@hooks/useDocumentTitle'
import React, { ReactNode } from 'react'

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
    <div className={`${appClass}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
