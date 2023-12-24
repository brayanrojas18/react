const errors = [
  {
    code: 'auth/user-not-found',
    text: 'Usuario invalido.',
    id: 'user-not-found'
  },
  {
    code: 'auth/invalid-email',
    text: 'Usuario invalido',
    id: 'invalid-email'
  },
  {
    code: 'auth/wrong-password',
    text: 'Contraseña invalida.',
    id: 'wrong-password'
  },
  {
    code: 'auth/internal-error',
    text: 'Completa los campos para iniciar sesión.',
    id: 'internal-error'
  },
  {
    code: 'auth/missing-email',
    text: 'Completa los campos para iniciar sesión.',
    id: 'missing-email'
  },
  {
    code: 'auth/too-many-requests',
    text: 'Demasiados intentos, por favor inténtanlo de nuevo más tarde.',
    id: 'too-many-requests'
  }
]

export const findError = (error) => {
  return errors.find((el) => el.code === error)
}
