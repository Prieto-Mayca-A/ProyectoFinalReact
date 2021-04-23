export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email np valido."
  if (!re.test(email)) return 'Ooops! Necesitamos una dirección de correo electrónico válida.'
  return ''
}
