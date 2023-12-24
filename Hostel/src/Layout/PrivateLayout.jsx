import { Outlet } from 'react-router'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import Navbar from '../components/common/Navbar'

const PrivateLayout = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <ProtectedRoute>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ProtectedRoute>
    </section>
  )
}

export default PrivateLayout
