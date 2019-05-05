import { convert } from '..'
import { Adapter } from '@openci/adapter-common'

class TestAdapter extends Adapter {
  convert (input: any) {
    return {
      destination: input.source
    }
  }
}

it('should convert input with TestAdapter', () => {
  const source = {
    source: true
  } as any
  const destination = {
    destination: true
  }

  expect(convert(source, TestAdapter)).toEqual(destination)
})
