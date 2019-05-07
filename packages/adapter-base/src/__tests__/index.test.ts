import { Adapter } from '..'
// @ts-ignore
import exampleSchema from './fixtures/example.schema.json'
let got: any = require('got')

jest.mock('got')

describe('validate method', () => {
  it('should return true when no schemaUrl is set', async () => {
    const adapter = new Adapter()
    expect(await adapter.validate({})).toEqual(true)
  })

  it('should return true given valid data', async () => {
    const adapter = new Adapter()
    adapter.schemaUrl = 'http://example.com'
    got.mockResolvedValue({ body: JSON.stringify(exampleSchema) })
    expect(await adapter.validate({})).toEqual(true)
  })

  it('should return false given invalid data', async () => {
    const adapter = new Adapter()
    adapter.schemaUrl = 'http://example.com'
    got.mockResolvedValue({ body: JSON.stringify(exampleSchema) })
    expect(await adapter.validate({ test: 0 })).toEqual(false)
  })
})
