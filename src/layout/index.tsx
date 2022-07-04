import './styles.scss'

import Footer from '@components/footer'
import Header from '@components/header'
import useDocumentTitle from '@hooks/useDocumentTitle'
import React, { ReactNode } from 'react'

interface LayoutProps {
  documentTitle?: string
  children: ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  documentTitle,
  children,
}) => {
  const title = documentTitle ? `${documentTitle} | React App` : 'React App'
  useDocumentTitle(title)
  return (
    <div className="app">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
