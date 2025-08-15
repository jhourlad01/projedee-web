import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      {/* Hero Section */}
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl dark:text-gray-300">
            Ready to hire skilled Filipino developers? Let&apos;s discuss your project requirements 
            and find the perfect talent for your team.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
            <FaEnvelope className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Send us your project details
          </p>
          <a 
            href="mailto:hello@projedee.com" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            hello@projedee.com
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
            <FaPhone className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Speak directly with our team
          </p>
          <a 
            href="tel:+63-XXX-XXX-XXXX" 
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
          >
            +63 XXX XXX XXXX
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-900">
            <FaMapMarkerAlt className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our office location
          </p>
          <p className="text-purple-600 dark:text-purple-400">
            Manila, Philippines
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6" role="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Tell us about your project requirements, timeline, and any specific technologies you need..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-lg font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/company/projedee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/projedee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on GitHub"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/projedee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Twitter"
            className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">How quickly can you start?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We can typically match you with qualified developers within 1-2 weeks, depending on your specific requirements.
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">What are your rates?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our rates are 40-60% lower than US/EU developers while maintaining the same quality standards.
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">Do you offer ongoing support?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, we provide 24/7 support and can establish long-term partnerships for ongoing development needs.
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-2">What technologies do you specialize in?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We work with modern web technologies including React, Next.js, Node.js, Python, and cloud platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
