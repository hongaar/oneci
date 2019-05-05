import { validate } from './validate'

export function isValid (data: any) {
  try {
    validate(data)
  } catch (error) {
    return false
  }
  return true
}
