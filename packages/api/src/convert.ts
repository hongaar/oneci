import { Spec } from '@openci/spec'
import { Adapter } from '@openci/adapter-common'

export function convert (data: Spec, format: string) {
  const ForeignAdapter = require(`@openci/adapter-${format}`).default
  const adapter = new ForeignAdapter() as Adapter

  return adapter.convert(data)
}
