import { Spec } from '@openci/spec'
import { Adapter } from '@openci/adapter-common'

export function convert (data: Spec, format: typeof Adapter | string) {
  let adapter
  if (typeof format === 'string') {
    const ForeignAdapter = require(`@openci/adapter-${format}`).default
    adapter = new ForeignAdapter() as Adapter
  } else {
    adapter = new format()
  }

  return adapter.convert(data)
}
