const Input = ({
  type,
  placeholder,
  innerRef,
  name,
  handleChange,
  id,
  className
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={innerRef}
      name={name}
      onChange={handleChange}
      id={id}
      className={`text-white placeholder:text-white/60 input-bordered input w-full ${className}`}
    />
  )
}

Input.defaultProps = {
  className: null
}

export default Input
