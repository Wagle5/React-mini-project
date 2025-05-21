import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaLaptopCode, FaFlask, FaGlobe, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Our Project" 
        subtitle="Learn about our innovative approach to education and technology"
        bgImage="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Project Overview</h2>
              <p className="text-lg text-neutral-700 mb-8">
                Our major project aims to revolutionize the way educational resources are accessed and utilized 
                by students in computer science and engineering. We're developing an innovative platform that combines 
                interactive learning, real-time collaboration, and cutting-edge technology to enhance the educational 
                experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">Mission</h3>
                  <p className="text-neutral-700">
                    To create an accessible, engaging, and comprehensive learning ecosystem that empowers 
                    students to master complex technical concepts through practical application and collaborative 
                    learning.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">Vision</h3>
                  <p className="text-neutral-700">
                    We envision a future where technology education is inclusive, adaptive, and aligned with 
                    industry needs, preparing students to become innovative problem-solvers and leaders in the 
                    digital economy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Key Objectives</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaLaptopCode className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Learning Platform</h3>
                    <p className="text-neutral-700">
                      Develop a responsive web application featuring interactive tutorials, code simulations, and real-time 
                      feedback systems to enhance understanding of programming concepts and frameworks like React.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <FaUsers className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Learning Environment</h3>
                    <p className="text-neutral-700">
                      Implement peer-to-peer learning features, group projects, and mentor-student connections to foster 
                      a supportive community that encourages knowledge sharing and collaborative problem-solving.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <FaFlask className="text-accent-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovative Assessment Methods</h3>
                    <p className="text-neutral-700">
                      Create project-based assessments and practical challenges that evaluate both technical skills and 
                      critical thinking abilities, providing a more comprehensive measure of student capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-success-100 p-3 rounded-full">
                    <FaGlobe className="text-success-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Integration</h3>
                    <p className="text-neutral-700">
                      Establish connections with industry partners to align curriculum with current industry needs, 
                      provide real-world projects, and create pathways to internships and employment opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Expected Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-primary-50 border border-primary-100">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap className="text-primary-600 text-xl" />
                    <h3 className="text-lg font-semibold">Enhanced Learning Outcomes</h3>
                  </div>
                  <p className="text-neutral-700">
                    Improve student comprehension, retention, and application of complex technical concepts through 
                    experiential learning and immediate feedback mechanisms.
                  </p>
                </div>
                
                <div className="card bg-secondary-50 border border-secondary-100">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChalkboardTeacher className="text-secondary-600 text-xl" />
                    <h3 className="text-lg font-semibold">Personalized Education</h3>
                  </div>
                  <p className="text-neutral-700">
                    Adapt learning pathways to individual student needs, allowing for self-paced progress and focused 
                    development in areas of interest or challenge.
                  </p>
                </div>
                
                <div className="card bg-accent-50 border border-accent-100">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUsers className="text-accent-600 text-xl" />
                    <h3 className="text-lg font-semibold">Community Building</h3>
                  </div>
                  <p className="text-neutral-700">
                    Foster a supportive learning community that extends beyond the classroom, encouraging continuous 
                    growth and professional networking.
                  </p>
                </div>
                
                <div className="card bg-success-50 border border-success-100">
                  <div className="flex items-center gap-3 mb-4">
                    <FaAward className="text-success-600 text-xl" />
                    <h3 className="text-lg font-semibold">Career Readiness</h3>
                  </div>
                  <p className="text-neutral-700">
                    Prepare students for successful careers by developing both technical expertise and essential soft 
                    skills valued by employers in the technology sector.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Technologies & Methodologies</h2>
              
              <div className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary-700">Frontend</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• React.js</li>
                      <li>• TailwindCSS</li>
                      <li>• Framer Motion</li>
                      <li>• Redux / Context API</li>
                      <li>• React Router</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary-700">Backend</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Node.js</li>
                      <li>• Express</li>
                      <li>• MongoDB</li>
                      <li>• Firebase</li>
                      <li>• WebSockets</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary-700">Methodologies</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Agile Development</li>
                      <li>• User-Centered Design</li>
                      <li>• Continuous Integration</li>
                      <li>• Test-Driven Development</li>
                      <li>• Microservices Architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-800">Project Timeline</h2>
              
              <div className="relative border-l-2 border-primary-200 pl-8 space-y-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[2.5rem] w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700">Phase 1: Research & Planning</h3>
                  
                  <ul className="mt-3 space-y-1 text-neutral-700">
                    <li>• Requirements gathering and analysis</li>
                    <li>• Technology stack selection</li>
                    <li>• Project architecture design</li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[2.5rem] w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700">Phase 2: Development</h3>
                  
                  <ul className="mt-3 space-y-1 text-neutral-700">
                    <li>• Core platform implementation</li>
                    <li>• Interactive learning modules creation</li>
                    <li>• User interface development</li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[2.5rem] w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-700">Phase 3: Testing & Refinement</h3>
                  
                  <ul className="mt-3 space-y-1 text-neutral-700">
                    <li>• User acceptance testing</li>
                    <li>• Performance optimization</li>
                    <li>• Feedback implementation</li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[2.5rem] w-6 h-6 bg-secondary-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-700">Phase 4: Deployment & Launch</h3>
                  <ul className="mt-3 space-y-1 text-neutral-700">
                    <li>• Platform deployment</li>
                    <li>• User onboarding</li>
                    <li>• Initial course rollout</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-primary-50 p-8 rounded-xl border border-primary-100"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary-800">Want to Learn More?</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Explore our project idea in detail or connect with our team to discuss collaboration opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button to="/idea" variant="primary">
                  View Project Idea
                </Button>
                <Button to="/team" variant="outline">
                  Meet Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About