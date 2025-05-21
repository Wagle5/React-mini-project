import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  to = null, 
  href = null,
  onClick = null,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  ...rest 
}) => {
  // Determine button size styles
  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-2.5 px-5',
    xl: 'text-lg py-3 px-6',
  }

  // Determine button variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-300',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-300',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-300',
    danger: 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-300',
  }

  const buttonStyles = `
    btn
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  )

  // Render as Link if 'to' prop is provided
  if (to) {
    return <Link to={to} className={buttonStyles} {...rest}>{content}</Link>
  }

  // Render as anchor if 'href' prop is provided
  if (href) {
    return <a href={href} className={buttonStyles} {...rest}>{content}</a>
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  )
}

export default Button