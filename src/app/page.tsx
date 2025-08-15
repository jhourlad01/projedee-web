import { 
  SiNextdotjs, 
  SiReact, 
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
              Available for hire
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Hire Filipino Developers & Talents
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Connect with skilled Filipino software developers, designers, and tech professionals. 
              Quality work, competitive rates, and reliable delivery from the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
              >
                <span>Hire Now</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-4 w-full bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Track Record
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <div className="py-20 px-4 w-full bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose Filipino Developers?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of working with skilled Filipino talent for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Skilled Filipino Talent</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Access to highly skilled Filipino developers with expertise in modern technologies and strong English communication.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Competitive Rates</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Quality work at competitive rates, perfect for startups and growing businesses looking to optimize their development costs.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reliable Delivery</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  On-time delivery with clear communication and professional project management throughout the development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Filipino Developers */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Why Choose Filipino Developers?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of working with skilled Filipino talent for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 text-left stagger-item hover-lift p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
                <div className="flex-shrink-0 animate-bounce-subtle">
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
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our streamlined process makes it easy to find and hire the perfect Filipino developer for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center stagger-item hover-lift">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce-subtle">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center shadow-md">
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
      </div>

      {/* Technologies Section */}
      <div className="py-20 px-4 w-full bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Technologies We Work With</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            We work with cutting-edge technologies to deliver modern, scalable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {technologies.map((tech, index) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-300 text-base font-medium hover-lift bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg stagger-item"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="animate-bounce-subtle">{tech.icon}</span>
                {tech.name}
              </span>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
