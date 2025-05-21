import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import { FaBrain, FaLaptopCode, FaUsers, FaChartLine, FaDatabase, FaMobile, FaServer, FaCogs, FaShieldAlt, FaCloud } from 'react-icons/fa'

const Idea = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div>
      <PageHeader 
        title="Project Overview" 
        subtitle="AI-Driven Deepfake Virtual Try-On for Real-Time Fashion Visualization"
        bgImage="https://images.pexels.com/photos/3759059/pexels-photo-3759059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Project Concept</h2>
              <p className="text-lg text-neutral-700 mb-8">
                Our innovative virtual try-on solution uses advanced AI and deepfake technology to revolutionize 
                the online shopping experience. Users can simply upload their photo and see how different clothing 
                items would look on them in real-time, making online fashion shopping more interactive and confident.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">The Problem</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <span>High return rates in online fashion retail due to fit issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <span>Difficulty visualizing how clothes will look in real life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <span>Time-consuming traditional try-on process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                      <span>Limited interaction with products in online shopping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-700">Our Solution</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2"></div>
                      <span>Real-time virtual try-on using AI and deepfake technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2"></div>
                      <span>Accurate visualization of clothing fit and style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2"></div>
                      <span>User-friendly interface for easy photo upload and clothing selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2"></div>
                      <span>Instant preview of multiple outfits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                    <FaLaptopCode className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Image Processing</h3>
                    <p className="text-neutral-700">
                      Advanced deep learning models process user photos and clothing items to create 
                      realistic virtual try-on results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-100 p-3 rounded-full flex-shrink-0">
                    <FaBrain className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Visualization</h3>
                    <p className="text-neutral-700">
                      Instant preview of how clothing items will look, with accurate representation 
                      of fit, style, and draping.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full flex-shrink-0">
                    <FaUsers className="text-accent-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                    <p className="text-neutral-700">
                      Simple and intuitive interface for uploading photos and selecting clothing items 
                      to try on virtually.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-success-100 p-3 rounded-full flex-shrink-0">
                    <FaChartLine className="text-success-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiple View Options</h3>
                    <p className="text-neutral-700">
                      View outfits from different angles and save favorite combinations for later reference.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">System Architecture</h2>
              
              <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 mb-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-neutral-200">
                    <h3 className="text-lg font-semibold mb-3 text-primary-700">Frontend Layer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-primary-50 p-3 rounded-lg border border-primary-100 text-center">
                        <FaLaptopCode className="text-primary-600 text-xl mx-auto mb-2" />
                        <p className="font-medium">React Application</p>
                      </div>
                      <div className="bg-primary-50 p-3 rounded-lg border border-primary-100 text-center">
                        <FaMobile className="text-primary-600 text-xl mx-auto mb-2" />
                        <p className="font-medium">Responsive UI</p>
                      </div>
                      <div className="bg-primary-50 p-3 rounded-lg border border-primary-100 text-center">
                        <FaUsers className="text-primary-600 text-xl mx-auto mb-2" />
                        <p className="font-medium">User Dashboard</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 text-center">
                    <FaServer className="text-secondary-600 text-xl mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">API Gateway & Image Processing</h3>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-neutral-200">
                    <h3 className="text-lg font-semibold mb-3 text-accent-700">AI Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-accent-50 p-3 rounded-lg border border-accent-100 text-center">
                        <p className="font-medium">Deepfake Model</p>
                      </div>
                      <div className="bg-accent-50 p-3 rounded-lg border border-accent-100 text-center">
                        <p className="font-medium">Image Processing</p>
                      </div>
                      <div className="bg-accent-50 p-3 rounded-lg border border-accent-100 text-center">
                        <p className="font-medium">Size Prediction</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-warning-50 p-4 rounded-lg border border-warning-100">
                    <h3 className="text-lg font-semibold mb-3 text-warning-700">Data Storage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                        <FaDatabase className="text-warning-600 text-xl mx-auto mb-2" />
                        <p className="font-medium">User Data & Preferences</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-neutral-200 text-center">
                        <FaDatabase className="text-warning-600 text-xl mx-auto mb-2" />
                        <p className="font-medium">Clothing Database</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Technology Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">Frontend</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="text-neutral-700">React.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="text-neutral-700">TailwindCSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="text-neutral-700">Framer Motion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="text-neutral-700">React Router</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-700">Backend & AI</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                      <span className="text-neutral-700">Python</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                      <span className="text-neutral-700">TensorFlow/PyTorch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                      <span className="text-neutral-700">OpenCV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                      <span className="text-neutral-700">FastAPI</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-accent-700">Infrastructure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                      <span className="text-neutral-700">Docker</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                      <span className="text-neutral-700">MongoDB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                      <span className="text-neutral-700">Redis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                      <span className="text-neutral-700">AWS/GCP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Future Enhancements</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">Live Camera Integration</h3>
                  <p className="text-neutral-700">
                    Implement real-time virtual try-on using device cameras, allowing users to see clothing 
                    items on themselves instantly through their webcam or mobile camera.
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">Enhanced AI Features</h3>
                  <p className="text-neutral-700">
                    Improve the AI model to handle more complex clothing items, multiple layers, and 
                    accessories, providing even more realistic and accurate visualizations.
                  </p>
                </div>
                
                <div className="bg-accent-50 p-6 rounded-lg border border-accent-100">
                  <h3 className="text-xl font-semibold mb-3 text-accent-700">Size Recommendations</h3>
                  <p className="text-neutral-700">
                    Integrate AI-powered size prediction to provide personalized size recommendations 
                    based on user measurements and preferences.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
                <p className="mb-6">
                  Interested in our AI-driven virtual try-on solution? Contact our team to learn more 
                  about the technology and potential applications.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button to="/team" variant="primary" className="bg-white text-primary-700 hover:bg-neutral-100">
                    Meet Our Team
                  </Button>
                  <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Idea