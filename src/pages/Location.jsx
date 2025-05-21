import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import { FaMapMarkerAlt, FaDirections, FaBus, FaCar, FaSubway, FaWalking, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Location = () => {
  return (
    <div>
      <PageHeader 
        title="Our Location" 
        subtitle="Find our campus facilities and get directions to the CSE Department"
        bgImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-neutral-800">Visit Our Department</h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Our Computer Science & Engineering Department is located in the heart of Tech Campus, 
                providing a modern learning environment with state-of-the-art facilities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Map Embed */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-[400px] bg-neutral-100 rounded-lg overflow-hidden shadow-lg"
              >
                {/* This is a placeholder for a map. In a real implementation, you would embed Google Maps or similar */}
                <div className="w-full h-full relative bg-neutral-200">
                  <img 
                    src="https://images.pexels.com/photos/16013851/pexels-photo-16013851/free-photo-of-aerial-view-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Campus Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="text-center text-white px-4">
                      <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-primary-500 animate-pulse" />
                      <h3 className="text-xl font-bold mb-2">CSE Department</h3>
                      <p className="text-sm mb-4">SMVITM Bantakal</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center gap-2"
                      >
                        <FaDirections /> Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-800">Department Location</h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-primary-700">Main Address</h4>
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-primary-600 text-xl mt-1" />
                      <div>
                        <p className="text-neutral-700">
                          CSE Department<br />
                          SMVITM Bantakal<br />
                          Udupi Karnataka
                        
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-primary-700">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-primary-600" />
                        <p className="text-neutral-700">+1 (123) 456-7890</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-primary-600" />
                        <p className="text-neutral-700">info@csedepartment.edu</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaClock className="text-primary-600 mt-1" />
                        <div>
                          <p className="text-neutral-700">
                            Monday - Friday: 8:00 AM - 4:40 PM<br />
                            Saturday:Closed<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                  
                    <Button to="/contact" variant="outline">
                      Schedule a Visit
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Transportation Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 text-center">Getting Here</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCar className="text-2xl text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">By Car</h4>
                  <p className="text-neutral-600">
                    Visitor parking available in Lots A and B. Parking fee: $5 per day.
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBus className="text-2xl text-secondary-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">By Bus</h4>
                  <p className="text-neutral-600">
                    Routes 42, 67, and 89 stop at University Station, a 5-minute walk to our building.
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSubway className="text-2xl text-accent-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">By Metro</h4>
                  <p className="text-neutral-600">
                    Blue and Red lines to Tech Station. Exit through North entrance for shortest route.
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaWalking className="text-2xl text-success-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Walking</h4>
                  <p className="text-neutral-600">
                    From downtown: 15-minute walk via University Boulevard and Tech Pathway.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Campus Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 text-center">Campus Overview</h3>
              
              <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="University Campus" 
                      className="rounded-lg shadow-md mb-4 w-full h-60 object-cover"
                    />
                    <p className="text-sm text-neutral-500 italic text-center">
                      Aerial view of Tech Campus
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-700">Key Campus Locations</h4>
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">A</div>
                        <div>
                          <span className="font-medium">Tech Building (CSE Department)</span>
                          <p className="text-sm text-neutral-500">Main location of all CS programs and labs</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-secondary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">B</div>
                        <div>
                          <span className="font-medium">University Library</span>
                          <p className="text-sm text-neutral-500">24-hour access to digital resources</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">C</div>
                        <div>
                          <span className="font-medium">Student Center</span>
                          <p className="text-sm text-neutral-500">Dining, recreation, and student services</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-success-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">D</div>
                        <div>
                          <span className="font-medium">Visitor Parking</span>
                          <p className="text-sm text-neutral-500">Lots A and B, accessible from Main Street</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-warning-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">E</div>
                        <div>
                          <span className="font-medium">Innovation Center</span>
                          <p className="text-sm text-neutral-500">Startup incubator and research facilities</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Virtual Tour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="CSE Department Hallway" 
                    className="w-full h-64 object-cover opacity-25"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-3">Take a Virtual Tour</h3>
                    <p className="mb-6 max-w-2xl">
                      Can't visit in person? Explore our facilities, labs, and classrooms through our
                      interactive virtual tour. Get a feel for the CSE Department before your visit!
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:bg-opacity-10"
                    >
                      Start Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location