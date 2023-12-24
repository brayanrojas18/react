import { faCalendarDays, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const Table = ({ rooms }) => {
  return (
    <section className="w-full p-4 lg:w-1/2">
      <table className="table-zebra table w-full">
        <thead>
          <tr>
            <th>habitacion</th>
            <th>estado</th>
            <th>ver</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => {
            const { roomNum, status } = room

            return (
              <tr key={roomNum}>
                <td>{roomNum}</td>
                <td>
                  <div className="indicator">
                    <p>{status === 'available' ? 'Disponible' : 'Ocupado'}</p>
                    <span
                      className={`indicator-middle badge-secondary badge badge-xs indicator-item -left-6 ${
                        status === 'available' ? 'badge-accent' : 'badge-error'
                      }`}
                    />
                  </div>
                </td>
                <td className="p-0">
                  <div
                    className="tooltip"
                    data-tip={
                      status === 'available'
                        ? 'Agregar reserva'
                        : 'Ver información'
                    }
                  >
                    <Link
                      className="btn-ghost btn"
                      to={status === 'available' ? '/registro-de-huesped' : '#'}
                    >
                      <Icon
                        icon={status === 'available' ? faCalendarDays : faEye}
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Table
