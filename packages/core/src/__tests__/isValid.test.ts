import { isValid } from '..'
// @ts-ignore
import invalid from './fixtures/invalid.oneci.json'
// @ts-ignore
import valid from './fixtures/valid.oneci.json'

it('should return true for a valid object', () => {
  expect(isValid(valid)).toEqual(true)
})

it('should return false for an invalid object', () => {
  expect(isValid(invalid)).toEqual(false)
})
