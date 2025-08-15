# ProjeDee - Filipino Developer Hiring Platform

A modern Next.js web application for connecting businesses with skilled Filipino developers and tech professionals.

## 🚀 Features

- **Professional Landing Page** - Showcase Filipino developer advantages
- **Technology Showcase** - Display expertise across 16+ modern technologies
- **Statistics Dashboard** - Highlight success metrics and client satisfaction
- **Multi-page Structure** - Home, About, Portfolio, and Contact pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Clean, professional design with smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **Frontend**: React 19.1.0, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Testing**: Jest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd projedee-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Available Scripts

- `npm run dev` - Start development server with file watching
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run check-all` - Run all quality checks
- `npm run pre-commit` - Pre-commit quality checks

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── layout/            # Layout components
│       ├── Header.tsx     # Navigation header
│       ├── Footer.tsx     # Site footer
│       ├── Layout.tsx     # Main layout wrapper
│       └── Brand.tsx      # Brand component
└── public/                # Static assets
```

## 🎯 Business Focus

ProjeDee connects businesses with Filipino developers, highlighting:

- **Cost-Effective Rates** - Save 40-60% compared to US/EU developers
- **English Proficiency** - Excellent communication skills
- **Cultural Alignment** - Western work culture understanding
- **Time Zone Advantage** - Extended development hours
- **Technical Expertise** - Modern web technologies and frameworks

## 🧪 Testing

The project includes comprehensive testing setup:

- Unit tests for all major components
- React Testing Library for component testing
- Jest configuration with jsdom environment
- Test coverage reporting

Run tests:
```bash
npm test
```

## 🔧 Development

### Code Quality

The project enforces high code quality standards:

- **TypeScript** - Strict mode enabled
- **ESLint** - Comprehensive rules for React, Next.js, and accessibility
- **Prettier** - Consistent code formatting
- **Pre-commit hooks** - Automated quality checks

### Environment Setup

For WSL development (as configured):
```bash
CHOKIDAR_USEPOLLING=true npm run dev
```

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

## 📝 Contributing

1. Run quality checks before committing:
```bash
npm run check-all
```

2. Ensure all tests pass:
```bash
npm test
```

3. Follow the established code style and conventions.

## 📄 License

This project is private and proprietary.
