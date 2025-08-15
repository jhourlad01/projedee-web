import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<Page />)
    expect(screen.getByText('Welcome to ProjeDee')).toBeInTheDocument()
  })

  it('contains navigation links', () => {
    render(<Page />)
    const learnMoreLink = screen.getByText('Learn More')
    const getStartedLink = screen.getByText('Get Started')
    expect(learnMoreLink).toBeInTheDocument()
    expect(getStartedLink).toBeInTheDocument()
  })

  it('displays feature cards', () => {
    render(<Page />)
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })
})
