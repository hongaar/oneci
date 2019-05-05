import { convert } from '..'
import { Adapter } from '@openci/adapter-common'

class TestAdapter extends Adapter {
  convert (input: any) {
    return {
      destination: input.source
    }
  }
}

const source = {
  source: true
} as any
const destination = {
  destination: true
}

it('should convert spec to travis format', () => {
  expect(convert(source, TestAdapter)).toEqual(destination)
})
