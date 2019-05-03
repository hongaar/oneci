import { Spec } from '@openci/spec'

type ForeignFormat =
  | 'travis'

export function convert (data: Spec, format: ForeignFormat) {
  console.log(data)
}
