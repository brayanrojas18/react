const Button = ({ children, color, size, className, onClick }) => {
  return (
    <button
      className={`btn-${size} btn text-neutral-100 bg-[${color}] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: 'neutral',
  size: 'md',
  className: null,
  onClick: null
}

export default Button
