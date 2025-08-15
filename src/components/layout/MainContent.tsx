import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
  className?: string
}

export function MainContent({ children, className = '' }: MainContentProps) {
  return (
    <main className={`flex-1 w-full ${className}`}>
      {children}
    </main>
  )
} 