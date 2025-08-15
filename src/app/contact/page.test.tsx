import { render, screen } from '@testing-library/react';
import Contact from './page';

describe('Contact Page', () => {
  it('renders contact page heading', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { name: /get in touch/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders contact methods', () => {
    render(<Contact />);
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Visit Us')).toBeInTheDocument();
  });

  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Contact />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('How quickly can you start?')).toBeInTheDocument();
    expect(screen.getByText('What are your rates?')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Contact />);
    expect(screen.getByText('Connect With Us')).toBeInTheDocument();
  });

  it('has proper form structure', () => {
    render(<Contact />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
