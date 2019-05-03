import { validate, ValidationError } from '..'
// @ts-ignore
import invalid from './fixtures/invalid.openci.json'
// @ts-ignore
import valid from './fixtures/valid.openci.json'

it('should not throw an error for a valid object', () => {
  const exec = () => {
    validate(valid)
  }
  expect(exec).not.toThrow(ValidationError)
})

it('should throw an error for a invalid object', () => {
  const exec = () => {
    validate(invalid)
  }
  expect(exec).toThrow(ValidationError)
})
