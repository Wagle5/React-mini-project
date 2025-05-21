import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../common/Button'
import { validateField } from '../../utils/validation'
import { useAuth } from '../../contexts/AuthContext'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
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
      if (field !== 'isAdmin') { // Skip admin checkbox validation
        const error = validateField(field, formData[field])
        if (error) newErrors[field] = error
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate login API call
      await login(formData.email, formData.password, formData.isAdmin)
      navigate('/')
    } catch (error) {
      setErrors({ form: 'Login failed. Please check your credentials.' })
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
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-primary-100">Sign in to your account to continue</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-8">
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
            {errors.password && (
              <p className="mt-1 text-sm text-error-500">{errors.password}</p>
            )}
          </div>
          
          {/* Admin Checkbox */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
                className="rounded border-neutral-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-neutral-700">Login as administrator</span>
            </label>
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isSubmitting}
            className="mb-4"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
          
          {/* Form Error */}
          {errors.form && (
            <div className="mb-4 p-2 bg-error-50 border border-error-200 text-error-700 rounded text-sm text-center">
              {errors.form}
            </div>
          )}
          
          {/* Registration Link */}
          <div className="text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
              Create one now
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default LoginForm