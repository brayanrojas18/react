import { useAuth } from '../../context/authContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'
import Button from '../Button'

const Navbar = () => {
  const { logout, user } = useAuth()
  const { email } = user
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const links = [
    {
      to: '#',
      label: 'Menu 1'
    },
    {
      to: '#',
      label: 'Menu 2'
    },
    {
      to: '#',
      label: 'Menu 3'
    }
  ]

  return (
    <nav className="navbar bg-h-dark">
      <div className="navbar-start grow gap-3">
        <div className="dropdown lg:hidden">
          <Button>
            <Icon icon={faBars} />
          </Button>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-h-dark p-2 shadow"
          >
            {links.map((link, idx) => (
              <li key={idx} className="p-2">
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="p-2 text-xl font-bold normal-case">
          Hostel Ale
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 flex-row flex-nowrap bg-h-dark p-2 shadow"
        >
          {links.map((link, idx) => (
            <li key={idx} className="p-2">
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <p>{email}</p>
        <Button onClick={handleLogout}>
          <Icon icon={faRightFromBracket} />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
