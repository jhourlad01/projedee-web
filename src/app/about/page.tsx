export default function About() {
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
              Learn about us
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              About ProjeDee
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Your trusted partner for connecting with skilled Filipino developers and tech professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Bridging the gap between global businesses and exceptional Filipino talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At ProjeDee, we bridge the gap between global businesses and exceptional Filipino talent. 
                We&apos;re committed to delivering high-quality software solutions while fostering meaningful 
                partnerships that drive innovation and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Quality-focused development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Strong communication skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Competitive pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">5+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Years of Excellence</div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-blue-600 dark:text-blue-400">50+</div>
                      <div className="text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600 dark:text-purple-400">100%</div>
                      <div className="text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We specialize in modern web development and digital transformation solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Custom Software Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailored solutions built to meet your specific business requirements.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Web Application Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Modern, responsive web applications using cutting-edge technologies.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technology Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">Strategic guidance to help you make the right technology decisions.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300">Modernize your business processes with digital solutions.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Legacy System Modernization</h3>
              <p className="text-gray-600 dark:text-gray-300">Upgrade and modernize your existing systems for better performance.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technical Project Management</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert project management to ensure successful delivery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We follow modern development practices including agile methodologies, 
              continuous integration/deployment, and test-driven development. Our team 
              stays current with the latest technologies and best practices to ensure 
              we deliver the most effective solutions for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose ProjeDee?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover what sets us apart in delivering exceptional software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Quick turnaround times without compromising on quality. We understand the importance of meeting deadlines.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quality Assurance</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Rigorous testing and quality control processes ensure that every project meets the highest standards.
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Round-the-clock support to address any concerns and ensure smooth project execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Information */}
      <div className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Terms of Use */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Terms of Use
              </h2>
              <div className="space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1. Acceptance of Terms</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      By accessing and using this website, you accept and agree to be bound by the terms 
                      and provision of this agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2. Use License</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Permission is granted to temporarily download one copy of the materials on ProjeDee&apos;s 
                      website for personal, non-commercial transitory viewing only.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3. Disclaimer</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The materials on ProjeDee&apos;s website are provided on an &apos;as is&apos; basis. ProjeDee makes 
                      no warranties, expressed or implied, and hereby disclaims and negates all other 
                      warranties including without limitation, implied warranties or conditions of 
                      merchantability, fitness for a particular purpose, or non-infringement of 
                      intellectual property or other violation of rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4. Limitations</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      In no event shall ProjeDee or its suppliers be liable for any damages (including, 
                      without limitation, damages for loss of data or profit, or due to business interruption) 
                      arising out of the use or inability to use the materials on ProjeDee&apos;s website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Privacy Policy
              </h2>
              <div className="space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1. Information We Collect</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We collect information you provide directly to us, such as when you contact us 
                      through our website, including your name, email address, and any other information 
                      you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2. How We Use Your Information</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use the information we collect to respond to your inquiries, provide our services, 
                      and improve our website and services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3. Information Sharing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4. Data Security</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We implement appropriate security measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5. Contact Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      If you have any questions about this Privacy Policy, please contact us through 
                      our contact page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}