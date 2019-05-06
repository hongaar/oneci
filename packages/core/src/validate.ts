import { schema } from '@oneci/spec'
import Ajv from 'ajv'
import betterAjvErrors from 'better-ajv-errors'

export class ValidationError extends Error {}

export function validate (data: any) {
  const ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
  })
  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    const errors = betterAjvErrors(schema, data, validate.errors, {
      indent: 2
    })
    console.error(errors)
    throw new ValidationError(ajv.errorsText(validate.errors))
  }
}
