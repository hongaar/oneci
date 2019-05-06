import { Spec } from '@oneci/spec'
import { Adapter } from '@oneci/adapter-common'

export function convert (data: Spec, format: typeof Adapter | string) {
  let adapter
  if (typeof format === 'string') {
    const ForeignAdapter = require(`@oneci/adapter-${format}`).default
    adapter = new ForeignAdapter() as Adapter
  } else {
    adapter = new format()
  }

  const converted = adapter.convert(data)
  const stripped = JSON.parse(JSON.stringify(converted))

  return stripped
}
