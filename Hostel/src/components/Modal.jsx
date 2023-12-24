import { useEffect } from 'react'
import Button from './Button'

const Modal = ({ modalId, title, toggleModal, innerRef }) => {
  useEffect(() => {
    innerRef.current.checked = toggleModal
  }, [toggleModal])

  const handleClick = () => {
    innerRef.current.checked = false
  }

  return (
    <>
      <input
        type="checkbox"
        ref={innerRef}
        id={modalId}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative flex flex-col items-center gap-3">
          <h3 className="text-white text-lg font-bold uppercase">{title}</h3>
          <Button onClick={() => handleClick()} />
        </div>
      </div>
    </>
  )
}

export default Modal
