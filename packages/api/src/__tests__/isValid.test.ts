import { isValid } from '..'
// @ts-ignore
import invalid from './fixtures/invalid.openci.json'
// @ts-ignore
import valid from './fixtures/valid.openci.json'

it('should return true for a valid object', () => {
  expect(isValid(valid)).toEqual(true)
})

it('should return false for an invalid object', () => {
  expect(isValid(invalid)).toEqual(false)
})
