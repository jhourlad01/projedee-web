import Image from 'next/image'

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

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our successful projects and see how we've helped businesses transform 
          their digital presence with innovative software solutions.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.year}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help bring your vision to life with our expertise 
          in modern software development and digital transformation.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  )
} 