/**
 * Email validation
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Password validation - at least 8 chars, 1 uppercase, 1 lowercase, 1 number
 * @param {string} password - The password to validate 
 * @returns {boolean} - True if password is valid
 */
export const validatePassword = (password) => {
  const minLength = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  
  return minLength && hasUppercase && hasLowercase && hasNumber
}

/**
 * Password strength indicator
 * @param {string} password - The password to check
 * @returns {string} - 'weak', 'medium', or 'strong'
 */
export const getPasswordStrength = (password) => {
  if (!password) return 'weak'
  
  const minLength = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
  const score = [minLength, hasUppercase, hasLowercase, hasNumber, hasSpecial]
    .filter(Boolean).length
  
  if (score <= 2) return 'weak'
  if (score <= 4) return 'medium'
  return 'strong'
}

/**
 * Form field validation
 * @param {string} name - Field name
 * @param {string} value - Field value 
 * @returns {string|null} - Error message or null if valid
 */
export const validateField = (name, value) => {
  switch (name) {
    case 'email':
      if (!value) return 'Email is required'
      if (!validateEmail(value)) return 'Please enter a valid email address'
      return null
      
    case 'password':
      if (!value) return 'Password is required'
      if (!validatePassword(value)) {
        return 'Password must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number'
      }
      return null
      
    case 'confirmPassword':
      if (!value) return 'Please confirm your password'
      return null
      
    case 'name':
      if (!value) return 'Name is required'
      if (value.length < 2) return 'Name must be at least 2 characters'
      return null
      
    case 'message':
      if (!value) return 'Message is required'
      if (value.length < 10) return 'Message must be at least 10 characters'
      return null
      
    case 'subject':
      if (!value) return 'Subject is required'
      return null
      
    default:
      return null
  }
}

/**
 * Match passwords check
 * @param {string} password - Original password
 * @param {string} confirmPassword - Confirmation password
 * @returns {boolean} - True if passwords match
 */
export const doPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword
}