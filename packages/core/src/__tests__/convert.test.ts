import { convert } from '..'
import { Adapter } from '@oneci/adapter-base'

type TestSpec = {
  destination: boolean;
}

class TestAdapter extends Adapter<TestSpec> {
  template = {
    destination: (data: any) => data.source
  }
}

it('should convert input with TestAdapter', () => {
  const source = {
    source: true
  } as any
  const destination = {
    destination: true
  }

  expect(convert(source, new TestAdapter())).toEqual(destination)
})
