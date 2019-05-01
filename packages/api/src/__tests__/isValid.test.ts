import { isValid } from '../index'
// @ts-ignore
import invalid from './fixtures/invalid.openci.json'
// @ts-ignore
import valid from './fixtures/valid.openci.json'

test('isValid should return true for a valid object', () => {
  const output = isValid(valid)
  expect(output).toBeTruthy()
})

test('isValid should return false for an invalid object', () => {
  const output = isValid(invalid)
  expect(output).toBeFalsy()
})
