import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
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
              Available for new projects
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to hire skilled Filipino developers? Let&apos;s discuss your project requirements 
              and find the perfect talent for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Project</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 px-4 w-full bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose your preferred method to start the conversation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 dark:border-blue-800/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaEnvelope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Send us your project details and we&apos;ll get back to you within 24 hours
                </p>
                <a 
                  href="mailto:hello@projedee.com" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
                >
                  hello@projedee.com
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 dark:border-green-800/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaPhone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Speak directly with our team for immediate consultation and support
                </p>
                <a 
                  href="tel:+63-XXX-XXX-XXXX" 
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors group-hover:translate-x-1 duration-300"
                >
                  +63 XXX XXX XXXX
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100 dark:border-purple-800/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaMapMarkerAlt className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Located in the heart of Manila&apos;s tech district
                </p>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  Manila, Philippines
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="py-20 px-4 w-full bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
              Let&apos;s Start Your Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tell us about your vision and we&apos;ll turn it into reality
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <form className="space-y-8" role="form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="ai-ml">AI/ML Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:border-blue-300 group-hover:shadow-md resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific technologies you need..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <span>Send Message</span>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-16 px-4 w-full bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Connect With Us</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/company/projedee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="group w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/projedee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on GitHub"
              className="group w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://twitter.com/projedee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
              className="group w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-110"
            >
              <FaTwitter className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-20 px-4 w-full bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">How quickly can you start?</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We can typically match you with qualified developers within 1-2 weeks, depending on your specific requirements and project complexity.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What are your rates?</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our rates are 40-60% lower than US/EU developers while maintaining the same quality standards and professional work ethics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Do you offer ongoing support?</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Yes, we provide 24/7 support and can establish long-term partnerships for ongoing development needs and maintenance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What technologies do you specialize in?</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We work with modern web technologies including React, Next.js, Node.js, Python, cloud platforms, and emerging AI/ML technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
