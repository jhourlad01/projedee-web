import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MainContent } from './MainContent'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  )
} 