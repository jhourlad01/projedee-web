import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('displays the Next.js logo', () => {
    render(<Page />)
    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument()
  })

  it('contains navigation links', () => {
    render(<Page />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('contains the main content list', () => {
    render(<Page />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
