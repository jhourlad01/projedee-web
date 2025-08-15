export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Company Information */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">About ProjeDee</h1>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ProjeDee is a software consulting company specializing in modern web development, 
            custom software solutions, and digital transformation. We help businesses leverage 
            technology to achieve their goals and stay competitive in the digital age.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver high-quality, scalable software solutions that drive business growth 
            and innovation. We believe in building lasting partnerships with our clients 
            through transparent communication, technical excellence, and reliable delivery.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Custom software development</li>
            <li>Web application development</li>
            <li>Technology consulting and strategy</li>
            <li>Digital transformation services</li>
            <li>Legacy system modernization</li>
            <li>Technical project management</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We follow modern development practices including agile methodologies, 
            continuous integration/deployment, and test-driven development. Our team 
            stays current with the latest technologies and best practices to ensure 
            we deliver the most effective solutions for our clients.
          </p>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Terms of Use</h2>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Use License</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Permission is granted to temporarily download one copy of the materials on ProjeDee's 
            website for personal, non-commercial transitory viewing only.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Disclaimer</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The materials on ProjeDee's website are provided on an 'as is' basis. ProjeDee makes 
            no warranties, expressed or implied, and hereby disclaims and negates all other 
            warranties including without limitation, implied warranties or conditions of 
            merchantability, fitness for a particular purpose, or non-infringement of 
            intellectual property or other violation of rights.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Limitations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            In no event shall ProjeDee or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on ProjeDee's website.
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Privacy Policy</h2>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We collect information you provide directly to us, such as when you contact us 
            through our website, including your name, email address, and any other information 
            you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We use the information we collect to respond to your inquiries, provide our services, 
            and improve our website and services.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Information Sharing</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Contact Us</h3>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us through 
            our contact page.
          </p>
        </div>
      </section>
    </div>
  )
} 