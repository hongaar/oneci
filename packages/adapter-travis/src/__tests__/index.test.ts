import TravisAdapter from '..'
// @ts-ignore
import validConfig from './fixtures/valid.travis.json'
// @ts-ignore
import exampleTravisConfig from './fixtures/example.travis.json'
// @ts-ignore
import exampleOpenciConfig from './fixtures/example.openci.json'

describe('validate method', () => {
  it('should return true given valid data', async () => {
    const adapter = new TravisAdapter()
    expect(await adapter.validate({})).toEqual(true)
  })

  it('should return true given sample data', async () => {
    const adapter = new TravisAdapter()
    expect(await adapter.validate(validConfig)).toEqual(true)
  })

  it('should return false given invalid data', async () => {
    const adapter = new TravisAdapter()
    expect(await adapter.validate({ stages: 'invalid' })).toEqual(false)
  })
})

describe('convert method', () => {
  it('should return openci config', async () => {
    const adapter = new TravisAdapter()
    expect(adapter.convert(exampleOpenciConfig)).toBe(exampleTravisConfig)
  })
})
