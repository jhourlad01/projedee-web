
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  category: string
  year: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and analytics dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    image: '/next.svg',
    category: 'Web Development',
    year: '2024'
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management system for clinics, including patient records, appointment scheduling, and billing integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: '/next.svg',
    category: 'Enterprise Software',
    year: '2024'
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Cross-platform mobile banking application with biometric authentication, real-time transactions, and financial analytics.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Stripe'],
    image: '/next.svg',
    category: 'Mobile Development',
    year: '2023'
  },
  {
    id: '4',
    title: 'Inventory Management System',
    description: 'Cloud-based inventory management solution with barcode scanning, automated reordering, and multi-location support.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'AWS'],
    image: '/next.svg',
    category: 'Business Software',
    year: '2023'
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours, advanced search filters, and CRM integration.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    image: '/next.svg',
    category: 'Web Development',
    year: '2023'
  },
  {
    id: '6',
    title: 'Learning Management System',
    description: 'Educational platform with course creation, student progress tracking, and interactive learning modules.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    image: '/next.svg',
    category: 'Education Technology',
    year: '2022'
  }
]

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* Hero Section with Gradient Background */}
      <div className="relative w-full py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        </div>
        <div className="relative space-y-8 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              View our work
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Our Portfolio
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Showcasing our best work and successful projects delivered for clients worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-4 w-full bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of our most successful projects across various industries and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.category}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life with our expertise 
              in modern software development and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
              >
                <span>Get Started</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 