import { motion } from 'framer-motion'

const PageHeader = ({ 
  title, 
  subtitle = '', 
  bgImage = null,
  alignment = 'center',
  size = 'lg',
  className = ''
}) => {
  // Background and text color setup
  const hasBgImage = !!bgImage
  const bgStyle = hasBgImage 
    ? { backgroundImage: `url(${bgImage})` }
    : {}
  
  // Text alignment styles
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }
  
  // Size options
  const sizeStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        relative 
        ${hasBgImage 
          ? 'bg-neutral-900 bg-cover bg-center bg-no-repeat text-white' 
          : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'}
        ${sizeStyles[size]}
        ${className}
      `}
      style={bgStyle}
    >
      {/* Dark overlay for background images */}
      {hasBgImage && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}

      <div className={`container mx-auto px-4 relative z-10 flex flex-col ${alignmentStyles[alignment]}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl text-neutral-100"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

export default PageHeader