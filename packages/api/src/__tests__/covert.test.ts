import { convert } from '..'
// @ts-ignore
import openciSample from './fixtures/example.openci.json'
// @ts-ignore
import travisSample from './fixtures/example.travis.json'
import { Spec } from '@openci/spec'

const fromData: Spec = openciSample
const toData: any = travisSample

it('should convert spec to travis format', () => {
  expect(convert(fromData, 'travis')).toEqual(toData)
})
