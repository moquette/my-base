import './styles.module.scss'

import Footer from '@components/footer'
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
    <>
      {children}
      <Footer />
    </>
  )
}
