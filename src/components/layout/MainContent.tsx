import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
  className?: string
}

export function MainContent({ children, className = '' }: MainContentProps) {
  return (
    <main className={`flex-1 flex items-center justify-center container mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  )
} 