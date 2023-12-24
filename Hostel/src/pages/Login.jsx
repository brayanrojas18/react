import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'
import Icon from '../components/Icon'
import Button from '../components/Button'
import hostelImg from '../assets/hostel.png'
import { findError } from '../helpers/findError'

const Login = () => {
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const inpEmail = useRef()
  const inpPassword = useRef()
  const { login, user } = useAuth()
  const navigate = useNavigate()

  const handleChange = (ref) => {
    const { current } = ref

    setUserData({
      ...userData,
      [current.name]: current.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = userData

    try {
      setLoading(true)
      await login(email, password)
      setLoading(false)
    } catch (error) {
      const newError = findError(error.code)
      setError(newError)
      console.log(newError)
    }
  }

  useEffect(() => {
    if (user) navigate('/')
  }, [user])

  return (
    <section className="flex min-h-screen items-center justify-center bg-h-dark bg-login bg-cover bg-center bg-no-repeat">
      <div className="border-gray-500 flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-md border bg-h-dark p-10">
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <img src={hostelImg} className="h-16 w-fit object-contain" />
          <h1 className="h-fit text-4xl font-bold uppercase tracking-widest text-h-primary">
            bienvenido
          </h1>
        </div>

        <form
          className="flex max-w-xs flex-col gap-3 p-3 sm:items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="email"
            placeholder="Correo electrónico"
            innerRef={inpEmail}
            name="email"
            handleChange={() => handleChange(inpEmail)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            innerRef={inpPassword}
            name={'password'}
            handleChange={() => handleChange(inpPassword)}
          />

          {error?.code && (
            <div className="w-full text-center">
              <p className="text-[#dc2626]">{error.text}</p>
            </div>
          )}

          <Button className="mt-3 gap-2 bg-[#00ADB5] hover:bg-h-primary-focus">
            iniciar sesion
            {loading && <Icon icon={faSpinner} css="animate-spin h-5 w-5" />}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login
