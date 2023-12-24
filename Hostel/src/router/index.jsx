import { createBrowserRouter } from 'react-router-dom'

import PrivateLayout from '../Layout/PrivateLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import RoomRegister from '../pages/RoomRegister'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/registro-de-huesped',
        element: <RoomRegister />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />
  }
])
