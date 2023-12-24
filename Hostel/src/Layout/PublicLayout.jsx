import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <Outlet />
    </section>
  )
}

export default PublicLayout
