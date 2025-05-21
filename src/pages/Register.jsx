import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/auth/RegisterForm'
import { useAuth } from '../contexts/AuthContext'

const Register = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  
  // Redirect already logged in users
  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="container mx-auto px-4">
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register