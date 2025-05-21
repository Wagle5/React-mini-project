import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap,FaReact, FaBars, FaTimes, FaUser } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { currentUser, logout } = useAuth()
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location, setMobileMenuOpen])

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Idea', path: '/idea' },
    { name: 'Contact', path: '/contact' },
    { name: 'Location', path: '/location' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <FaReact className="text-2xl text-blue-500" />
  <span className="text-xl font-bold">React Project</span>
</Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md font-medium text-sm
                  ${isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                  }
                  transition-colors duration-200
                `}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            <div className="ml-4 flex items-center gap-2">
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100 rounded-md">
                    <FaUser className="text-neutral-600" />
                    <span className="text-sm font-medium text-neutral-800">
                      {currentUser.name}
                    </span>
                  </div>
                  <button 
                    onClick={logout}
                    className="btn-outline text-sm py-1.5 px-3"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <NavLink 
                    to="/login" 
                    className="btn-outline text-sm py-1.5 px-3"
                  >
                    Login
                  </NavLink>
                  <NavLink 
                    to="/register" 
                    className="btn-primary text-sm py-1.5 px-3"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-neutral-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      px-3 py-2 rounded-md font-medium text-base
                      ${isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                      }
                      transition-colors duration-200
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Auth Buttons - Mobile */}
                <div className="mt-2 flex flex-col gap-2">
                  {currentUser ? (
                    <>
                      <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100 rounded-md">
                        <FaUser className="text-neutral-600" />
                        <span className="text-sm font-medium text-neutral-800">
                          {currentUser.name}
                        </span>
                      </div>
                      <button 
                        onClick={logout}
                        className="btn-outline w-full"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink 
                        to="/login" 
                        className="btn-outline w-full"
                      >
                        Login
                      </NavLink>
                      <NavLink 
                        to="/register" 
                        className="btn-primary w-full"
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar