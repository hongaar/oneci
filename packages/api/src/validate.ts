import schema from '@openci/spec'
import Ajv from 'ajv'

export class ValidationError extends Error {}

export function validate (data: any) {
  const ajv = new Ajv({ allErrors: true })
  const valid = ajv.validate(schema, data)

  if (!valid) {
    throw new ValidationError(ajv.errorsText())
  }
}
