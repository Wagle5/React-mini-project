import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Failed to parse stored user', error)
        localStorage.removeItem('currentUser')
      }
    }
    setLoading(false)
  }, [])

  // Login function (UI-only, no backend)
  const login = (email, password, isAdmin = false) => {
    // This is a mock login function
    const user = {
      id: '1',
      email,
      name: email.split('@')[0],
      isAdmin,
    }
    
    setCurrentUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    return Promise.resolve(user)
  }

  // Register function (UI-only, no backend)
  const register = (name, email, password) => {
    // This is a mock register function
    const user = {
      id: '1',
      email,
      name,
      isAdmin: false,
    }
    
    setCurrentUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    return Promise.resolve(user)
  }

  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
    return Promise.resolve()
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}