import { useId, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { es } from 'react-date-range/dist/locale'
import { DateRange } from 'react-date-range'
import { addDays, format } from 'date-fns'
import Input from '../components/Input'
import Button from '../components/Button'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

const RoomRegister = () => {
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  const formItems = [
    {
      id: useId(),
      label: 'Nombre',
      type: 'text'
    },
    {
      id: useId(),
      label: 'Apellido',
      type: 'text'
    },
    {
      id: useId(),
      label: 'DNI',
      type: 'number'
    },
    {
      id: useId(),
      label: 'Teléfono',
      type: 'number'
    },
    {
      id: useId(),
      label: 'Dirección',
      type: 'text'
    }
  ]

  const handleRegisterRoom = async (e, id) => {
    e.preventDefault()
    const roomRef = doc(db, `rooms/${id}`)

    try {
      setLoading(true)
      await setDoc(roomRef)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="grid w-full place-items-center p-4">
      <h1 className="my-5 text-3xl uppercase">registro de huesped</h1>
      <form
        className="flex w-full justify-center rounded-[8px] border border-neutral bg-h-dark p-5 md:w-1/2"
        onSubmit={(e) => handleRegisterRoom(e)}
      >
        <div className="flex flex-wrap gap-[10px]">
          {formItems.map((item) => (
            <div className="form-control flex-grow" key={item.id}>
              <label htmlFor={item.id} className="label">
                <span className="label-text">{item.label}</span>
              </label>
              <Input type={item.type} id={item.id} />
            </div>
          ))}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Fecha de entrada y salida</span>
            </label>
            <DateRange
              onChange={(item) => setDate([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={date}
              dateDisplayFormat="dd MMM, yyyy"
              monthDisplayFormat="dd MMM, yyyy"
              locale={es}
              direction="horizontal"
              className="w-max-sm"
              rangeColors={['#00ADB5']}
              color={['#333']}
            />
          </div>

          <div className="mt-3 flex w-full justify-between">
            <Button className="bg-h-error hover:bg-h-error-focus">
              <Link to="/">Cancelar</Link>
            </Button>
            <Button className="gap-3 bg-[#00ADB5] hover:bg-h-primary-focus">
              Registrar
              {loading && <Icon icon={faSpinner} css="animate-spin h-5 w-5" />}
            </Button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default RoomRegister
