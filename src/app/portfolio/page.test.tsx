import { render, screen } from '@testing-library/react'
import PortfolioPage from './page'

describe('PortfolioPage', () => {
  it('renders without crashing', () => {
    render(<PortfolioPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
  })

  it('displays portfolio description', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/Explore our successful projects/)).toBeInTheDocument()
  })

  it('displays project cards', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Management System')).toBeInTheDocument()
    expect(screen.getByText('Mobile Banking App')).toBeInTheDocument()
  })

  it('displays project categories', () => {
    render(<PortfolioPage />)
    const categories = screen.getAllByText(/Web Development|Enterprise Software|Mobile Development/)
    expect(categories.length).toBeGreaterThan(0)
  })

  it('displays technology tags', () => {
    render(<PortfolioPage />)
    const nextjsTags = screen.getAllByText('Next.js')
    const typescriptTags = screen.getAllByText('TypeScript')
    const reactTags = screen.getAllByText('React')
    expect(nextjsTags.length).toBeGreaterThan(0)
    expect(typescriptTags.length).toBeGreaterThan(0)
    expect(reactTags.length).toBeGreaterThan(0)
  })

  it('contains call to action section', () => {
    render(<PortfolioPage />)
    expect(screen.getByText('Ready to Start Your Project?')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
}) 