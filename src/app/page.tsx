import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to ProjeDee
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            A modern Next.js application with comprehensive tooling, testing, and type checking.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
            href="/about"
          >
            Learn More
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="/contact"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <Image
              className="h-6 w-6"
              src="/next.svg"
              alt="Next.js"
              width={24}
              height={24}
            />
          </div>
          <h3 className="text-lg font-semibold">Next.js</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            React framework for production
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">TypeScript</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Type-safe development
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Utility-first CSS framework
          </p>
        </div>
      </div>
    </div>
  );
}
