import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher, FaLaptopCode, FaUserGraduate, FaBookReader, FaChalkboard } from 'react-icons/fa'
import Button from '../components/common/Button'
import csepic from '../assets/cs.jpg';
const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Department of <span className="text-secondary-400">Computer Science</span> & Engineering
              </h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-100">
                Empowering students with cutting-edge technology education, industry-relevant skills, and innovative research opportunities to shape the future of computing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  to="/about" 
                  variant="secondary" 
                  size="lg"
                >
                  Learn More
                </Button>
                <Button 
                  to="/contact" 
                  variant="outline" 
                  size="lg"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 border-white"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Computer Science Students" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

    {/* About Project Section */}
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
        AI-Driven Virtual Try-On
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg text-neutral-700">
        Our project leverages AI and augmented reality to enable users to virtually try on fashion items in real-time. 
        It enhances the online shopping experience with deepfake-based visualization.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="card card-hover"
      >
        <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
          <FaUserGraduate className="text-2xl text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Deepfake Technology</h3>
        <p className="text-neutral-600">
          The system uses deep learning to generate realistic try-on effects by mapping user photos with clothing models.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="card card-hover"
      >
        <div className="rounded-full bg-secondary-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
          <FaLaptopCode className="text-2xl text-secondary-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Augmented Reality</h3>
        <p className="text-neutral-600">
          Real-time AR is used to overlay virtual outfits on users, offering an immersive and interactive try-on experience.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="card card-hover"
      >
        <div className="rounded-full bg-accent-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
          <FaChalkboardTeacher className="text-2xl text-accent-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">React Frontend</h3>
        <p className="text-neutral-600">
          Built with React and Tailwind CSS, the user interface is responsive, fast, and designed for smooth navigation and interaction.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* CSE Department Section */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Computer Science & Engineering Department
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                The Department of Computer Science and Engineering offers innovative programs that combine fundamental principles 
                with cutting-edge technologies. Our curriculum is designed to prepare students for the ever-evolving tech industry 
                and research opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-success-100 p-2 mt-1">
                    <FaChalkboard className="text-success-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Comprehensive Curriculum</h4>
                    <p className="text-neutral-600">
                      From algorithms and data structures to AI and cybersecurity, our courses cover the entire spectrum of computer science.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-warning-100 p-2 mt-1">
                    <FaLaptopCode className="text-warning-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Hands-on Learning</h4>
                    <p className="text-neutral-600">
                      Practical projects, hackathons, and code competitions to develop real-world problem-solving skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-error-100 p-2 mt-1">
                    <FaBookReader className="text-error-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Research Opportunities</h4>
                    <p className="text-neutral-600">
                      Engage in cutting-edge research in areas like machine learning, computer vision, and secure computing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src={csepic}
                alt="CSE Department" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* React Course Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              React.js Development Course
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-neutral-100">
              Our comprehensive React course equips you with the skills to build modern, responsive, and interactive web applications 
              using the latest industry-standard technologies.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>React fundamentals and hook system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Component-based architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>State management with Redux</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Routing and navigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>API integration and asynchronous operations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">What You'll Build</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Interactive dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Single-page applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>E-commerce platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Social media features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Real-time applications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Build production-ready web applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Implement modern UI/UX patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Write clean, maintainable code</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Debug React applications effectively</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-300"></div>
                  <span>Deploy applications to production</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              to="/about" 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Learn More About Our Courses
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">
              Ready to Start Your Journey with Us?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Join our thriving community of innovators, thinkers, and tech enthusiasts. Discover the opportunities waiting for you at our CSE Department.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg"
              >
                Get in Touch
              </Button>
              <Button 
                to="/about" 
                variant="outline" 
                size="lg"
              >
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home