import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('AboutPage', () => {
  it('renders without crashing', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<AboutPage />)
    expect(screen.getByText('About ProjeDee')).toBeInTheDocument()
  })

  it('contains company information', () => {
    render(<AboutPage />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByText('Our Approach')).toBeInTheDocument()
  })

  it('contains terms of use section', () => {
    render(<AboutPage />)
    expect(screen.getByText('Terms of Use')).toBeInTheDocument()
    expect(screen.getByText(/Acceptance of Terms/)).toBeInTheDocument()
  })

  it('contains privacy policy section', () => {
    render(<AboutPage />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText(/Information We Collect/)).toBeInTheDocument()
  })

  it('displays services list', () => {
    render(<AboutPage />)
    expect(screen.getByText('Custom software development')).toBeInTheDocument()
    expect(screen.getByText('Web application development')).toBeInTheDocument()
    expect(screen.getByText('Technology consulting and strategy')).toBeInTheDocument()
  })
}) 