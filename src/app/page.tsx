import Image from "next/image";
import { 
  SiNextdotjs, 
  SiReact, 
  SiReactrouter, 
  SiNestjs, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiLaravel, 
  SiPhp, 
  SiAmazon, 
  SiGooglecloud, 
  SiFirebase, 
  SiOpenai, 
  SiLangchain
} from "react-icons/si";
import { FaMobile, FaCloud, FaUsers, FaClock, FaGlobe, FaDollarSign, FaCheckCircle, FaComments, FaCode, FaRocket } from "react-icons/fa";

// Technology data with proper brand icons
const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: 'React.js', icon: <SiReact className="w-8 h-8" /> },
  { name: 'React Mobile', icon: <FaMobile className="w-8 h-8" /> },
  { name: 'Nest.js', icon: <SiNestjs className="w-8 h-8" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: 'Vue.js', icon: <SiVuedotjs className="w-8 h-8" /> },
  { name: 'Laravel', icon: <SiLaravel className="w-8 h-8" /> },
  { name: 'PHP', icon: <SiPhp className="w-8 h-8" /> },
  { name: 'AWS', icon: <SiAmazon className="w-8 h-8" /> },
  { name: 'Azure', icon: <FaCloud className="w-8 h-8" /> },
  { name: 'Google Cloud Platform', icon: <SiGooglecloud className="w-8 h-8" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" /> },
  { name: 'OpenAI', icon: <SiOpenai className="w-8 h-8" /> },
  { name: 'GPT', icon: <SiOpenai className="w-8 h-8" /> },
  { name: 'LangChain', icon: <SiLangchain className="w-8 h-8" /> },
  { name: 'ChromaDB', icon: <SiFirebase className="w-8 h-8" /> }
];

// Statistics data
const stats = [
  { number: '50+', label: 'Projects Delivered', icon: <FaCode className="w-6 h-6" /> },
  { number: '100%', label: 'Client Satisfaction', icon: <FaCheckCircle className="w-6 h-6" /> },
  { number: '24/7', label: 'Support Available', icon: <FaClock className="w-6 h-6" /> },
  { number: '5+', label: 'Years Experience', icon: <FaUsers className="w-6 h-6" /> }
];

// Why choose Filipino developers
const advantages = [
  {
    title: 'Cost-Effective Rates',
    description: 'Save 40-60% compared to US/EU developers while maintaining quality',
    icon: <FaDollarSign className="w-8 h-8 text-green-600" />
  },
  {
    title: 'English Proficiency',
    description: 'Excellent English communication skills for seamless collaboration',
    icon: <FaGlobe className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Cultural Alignment',
    description: 'Western work culture understanding and professional approach',
    icon: <FaUsers className="w-8 h-8 text-purple-600" />
  },
  {
    title: 'Time Zone Advantage',
    description: 'Extended development hours with overlapping work schedules',
    icon: <FaClock className="w-8 h-8 text-orange-600" />
  }
];

// Process steps
const processSteps = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Reach out with your project requirements',
    icon: <FaComments className="w-6 h-6" />
  },
  {
    step: '02',
    title: 'Project Discussion',
    description: 'Detailed consultation and planning',
    icon: <FaUsers className="w-6 h-6" />
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular updates',
    icon: <FaCode className="w-6 h-6" />
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Quality testing and project handover',
    icon: <FaRocket className="w-6 h-6" />
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      {/* Hero Section */}
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hire Filipino Developers & Talents
          </h1>
          <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl dark:text-gray-300">
            Connect with skilled Filipino software developers, designers, and tech professionals. 
            Quality work, competitive rates, and reliable delivery from the Philippines.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-lg font-medium text-white shadow transition-colors hover:bg-blue-700"
            href="/contact"
          >
            Hire Now
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-lg font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="/portfolio"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-20 w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition Cards */}
      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
            <svg
              className="h-8 w-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Skilled Filipino Talent</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Access to highly skilled Filipino developers with expertise in modern technologies
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Competitive Rates</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Quality work at competitive rates, perfect for startups and growing businesses
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-900">
            <svg
              className="h-8 w-8 text-purple-600 dark:text-purple-400"
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
          <h3 className="text-xl font-semibold">Reliable Delivery</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            On-time delivery with clear communication and professional project management
          </p>
        </div>
      </div>

      {/* Why Choose Filipino Developers */}
      <div className="mt-20 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Why Choose Filipino Developers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-20 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Technologies We Work With</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-300 text-base font-medium"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
