import { useRouteError } from 'react-router'

const NotFound = () => {
  const error = useRouteError()

  return (
    <section>
      <h1>
        404
        <p>page not found</p>
        <p>{error.statusText || error.message}</p>
      </h1>
    </section>
  )
}

export default NotFound
