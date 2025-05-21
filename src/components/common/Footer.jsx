import { Link } from 'react-router-dom'
import { FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <FaGraduationCap className="text-2xl" />
              <span className="text-xl font-bold">React Project</span>
            </Link>
            <p className="text-neutral-300 text-sm mb-4">
          A major project built using React and Tailwind CSS, focusing on delivering a seamless user experience for AI-powered virtual fashion try-on. Designed with performance, accessibility, and modern UI practices in mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-300 hover:text-white transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/idea" className="text-neutral-300 hover:text-white transition-colors">Idea</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/location" className="text-neutral-300 hover:text-white transition-colors">Location</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Academic Calendar</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Library</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Research</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Student Portal</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Faculty Directory</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Events</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">SMVITM Bantakal</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-neutral-300 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@csedepartment.edu" className="text-neutral-300 hover:text-white transition-colors">
                  info@csedepartment.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-700 text-center text-neutral-400 text-sm">
          <p>© {currentYear} React Project. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer