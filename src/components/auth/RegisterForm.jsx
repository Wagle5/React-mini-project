import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../common/Button'
import { validateField, doPasswordsMatch, getPasswordStrength } from '../../utils/validation'
import { useAuth } from '../../contexts/AuthContext'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

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

  // Get password strength
  const passwordStrength = getPasswordStrength(formData.password)
  
  // Password strength colors
  const strengthColors = {
    weak: 'bg-error-500',
    medium: 'bg-warning-500',
    strong: 'bg-success-500'
  }
  
  // Password strength width
  const strengthWidth = {
    weak: 'w-1/3',
    medium: 'w-2/3',
    strong: 'w-full'
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Validate each field
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    
    // Check if passwords match
    if (formData.password && formData.confirmPassword) {
      if (!doPasswordsMatch(formData.password, formData.confirmPassword)) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate register API call
      await register(formData.name, formData.email, formData.password)
      navigate('/')
    } catch (error) {
      setErrors({ form: 'Registration failed. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-primary-600 px-6 py-8 text-white text-center">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-primary-100">Join our community today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-8">
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
          
          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-neutral-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-neutral-500" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className={`input-field pl-10 ${errors.password ? 'border-error-500 focus:ring-error-300' : ''}`}
                placeholder="********"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-neutral-500" />
                ) : (
                  <FaEye className="text-neutral-500" />
                )}
              </button>
            </div>
            {formData.password && (
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-xs capitalize">{passwordStrength}</span>
                  <span className="text-xs">
                    {passwordStrength === 'weak' && 'Use 8+ chars, numbers & symbols'}
                    {passwordStrength === 'medium' && 'Add symbols for stronger password'}
                    {passwordStrength === 'strong' && 'Strong password!'}
                  </span>
                </div>
                <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${strengthColors[passwordStrength]} ${strengthWidth[passwordStrength]} transition-all duration-300`}
                  ></div>
                </div>
              </div>
            )}
            {errors.password && (
              <p className="mt-1 text-sm text-error-500">{errors.password}</p>
            )}
          </div>
          
          {/* Confirm Password Field */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-neutral-700 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-neutral-500" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`input-field pl-10 ${errors.confirmPassword ? 'border-error-500 focus:ring-error-300' : ''}`}
                placeholder="********"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-neutral-500" />
                ) : (
                  <FaEye className="text-neutral-500" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-error-500">{errors.confirmPassword}</p>
            )}
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isSubmitting}
            className="mb-4"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
          
          {/* Form Error */}
          {errors.form && (
            <div className="mb-4 p-2 bg-error-50 border border-error-200 text-error-700 rounded text-sm text-center">
              {errors.form}
            </div>
          )}
          
          {/* Login Link */}
          <div className="text-center text-sm text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default RegisterForm