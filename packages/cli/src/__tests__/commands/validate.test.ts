import Validate from '../../commands/validate'

describe('validate command', () => {
  let result: any

  beforeEach(() => {
    result = []
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(val => result.push(val))
  })

  afterEach(() => jest.restoreAllMocks())

  it('should return error when run without arguments', async () => {
    try {
      await Validate.run([])
      // Should not happen
      expect('An error to be thrown').toEqual('An error is not thrown')
    } catch (error) {
      expect(error.toString()).toMatch('Could not detect an openci config file')
    }
  })
})
