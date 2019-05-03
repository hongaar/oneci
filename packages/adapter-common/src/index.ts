import { Spec } from '@openci/spec'
import got from 'got'
import Ajv from 'ajv'

export interface AdapterOptions {
  schemaUrl?: string
}

export class Adapter {
  public schemaUrl?: string

  async validate (data: any) {
    if (!this.schemaUrl) {
      return true
    }

    const response = await got(this.schemaUrl)
    const schema = JSON.parse(response.body)
    const ajv = new Ajv({
      allErrors: true,
      schemaId: 'auto'
    })
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))

    return ajv.validate(schema, data) as boolean
  }

  convert (data: Spec): object {
    throw new Error('Implement in child classes.')
  }
}
