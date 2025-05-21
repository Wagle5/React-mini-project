import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import Button from '../components/common/Button'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { validateField } from '../utils/validation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    // Validate each field
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, support, or collaboration opportunities"
        bgImage="https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 className="text-3xl font-bold mb-4 text-neutral-800">We'd Love to Hear From You</h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Whether you have questions about our programs, want to collaborate on research, or need technical support, 
                our team is ready to assist you.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-neutral-600 mb-4">For general inquiries and information</p>
                <a 
                  href="mailto:info@csedepartment.edu" 
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  info@ReactProject.in
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-2xl text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-neutral-600 mb-4">For immediate assistance during business hours</p>
                <a 
                  href="tel:+11234567890" 
                  className="text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </motion.div>
              
              <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="card text-center"
>
  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <FaMapMarkerAlt className="text-2xl text-accent-600" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
  <p className="text-neutral-600 mb-4">  We’re available Monday to Friday, from 9:00 AM to 5:00 PM. project</p>
  <address className="text-accent-600 font-medium not-italic">
    Department of CSE<br />
    SMVITM Bantakal<br />
    Udupi, Karnataka – 574115
  </address>
</motion.div>
</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-800">Send Us a Message</h3>
                  
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="text-4xl text-success-600" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-neutral-800">Message Sent Successfully!</h4>
                      <p className="text-neutral-600 mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button 
                        type="button" 
                        variant="primary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Name Field */}
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-neutral-700 text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-neutral-500" />
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input-field pl-10 ${errors.name ? 'border-error-500 focus:ring-error-300' : ''}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                        )}
                      </div>
                      
                      {/* Email Field */}
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-neutral-700 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-neutral-500" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input-field pl-10 ${errors.email ? 'border-error-500 focus:ring-error-300' : ''}`}
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                        )}
                      </div>
                      
                      {/* Subject Field */}
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-neutral-700 text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input-field ${errors.subject ? 'border-error-500 focus:ring-error-300' : ''}`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-error-500">{errors.subject}</p>
                        )}
                      </div>
                      
                      {/* Message Field */}
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-neutral-700 text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className={`input-field ${errors.message ? 'border-error-500 focus:ring-error-300' : ''}`}
                          placeholder="Please provide details about your inquiry..."
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                        )}
                      </div>
                      
                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth 
                        disabled={isSubmitting}
                        icon={isSubmitting ? null : <FaPaperPlane />}
                        iconPosition="right"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
              
              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-neutral-800">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h4 className="text-lg font-semibold mb-2 text-primary-700">What are your department's research areas?</h4>
                    <p className="text-neutral-600">
                      Our department focuses on several key research areas including artificial intelligence, 
                      cybersecurity, human-computer interaction, data science, and software engineering. Visit our 
                      About page to learn more about our specific research initiatives.
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h4 className="text-lg font-semibold mb-2 text-primary-700">How can I apply for the React course?</h4>
                    <p className="text-neutral-600">
                      The React course is open to all registered students in the CSE department. Current students 
                      can register through the student portal during the standard course registration period. 
                      For special circumstances, please contact the department directly.
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h4 className="text-lg font-semibold mb-2 text-primary-700">Do you offer internship opportunities?</h4>
                    <p className="text-neutral-600">
                      Yes, we collaborate with industry partners to provide internship opportunities for our students. 
                      These positions are typically announced at the beginning of each semester. Contact our career 
                      services office for more information.
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h4 className="text-lg font-semibold mb-2 text-primary-700">How can I collaborate on research projects?</h4>
                    <p className="text-neutral-600">
                      We welcome research collaborations with other academic institutions and industry partners. 
                      Please send a detailed proposal to our research coordinator via the contact form, and we'll 
                      schedule a meeting to discuss potential opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
                  <h4 className="text-lg font-semibold mb-2 text-primary-700">Need more information?</h4>
                  <p className="text-neutral-600 mb-4">
                    If you can't find the answer to your question, please don't hesitate to contact us using
                    the form or any of the contact methods provided.
                  </p>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary-600" />
                    <a 
                      href="mailto:info@csedepartment.edu" 
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      info@csedepartment.edu
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact