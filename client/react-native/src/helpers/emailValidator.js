export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "You must enter an email!"
  if (!re.test(email)) return 'Not a valid email address!'
  return ''
}
