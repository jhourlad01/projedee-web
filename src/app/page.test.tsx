import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('displays the main heading about hiring Filipino developers', () => {
    render(<Page />)
    expect(screen.getByText('Hire Filipino Developers & Talents')).toBeInTheDocument()
  })

  it('contains call to action buttons', () => {
    render(<Page />)
    const hireNowLink = screen.getByText('Hire Now')
    const viewWorkLink = screen.getByText('View Our Work')
    expect(hireNowLink).toBeInTheDocument()
    expect(viewWorkLink).toBeInTheDocument()
  })

  it('displays value proposition cards', () => {
    render(<Page />)
    expect(screen.getByText('Skilled Filipino Talent')).toBeInTheDocument()
    expect(screen.getByText('Competitive Rates')).toBeInTheDocument()
    expect(screen.getByText('Reliable Delivery')).toBeInTheDocument()
  })

  it('displays technologies section', () => {
    render(<Page />)
    expect(screen.getByText('Technologies We Work With')).toBeInTheDocument()
    expect(screen.getByText('React.js')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })
})
