import { Outlet } from 'react-router-dom'
// import Navbar from './components/common/Navbar'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AuthProvider from './context/authContext'

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <AuthProvider>
        <ProtectedRoute>
          {/* <Navbar /> */}
          <main>
            <Outlet />
          </main>
        </ProtectedRoute>
      </AuthProvider>
    </div>
  )
}

export default App
