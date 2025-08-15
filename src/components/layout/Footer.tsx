import Link from 'next/link'
import { Brand } from './Brand'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Brand />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. The source code is available on{' '}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="transition-colors hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
} 