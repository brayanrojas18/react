import { auth } from '../firebaseconfig'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return onAuth
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
