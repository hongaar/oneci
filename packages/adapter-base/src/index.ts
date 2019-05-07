import { Spec } from '@oneci/spec'
import got from 'got'
import Ajv from 'ajv'
import { compile, Template } from './templateCompiler'

export class Adapter<FS extends object = object> {
  public schemaUrl?: string
  public template?: Template<FS>

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

  convert (data: Spec) {
    if (!this.template) {
      throw new Error('Adapter has no map defined.')
    }

    const output = compile<FS>(this.template, data)

    return this.strip(output)
  }

  protected strip<T> (data: T) {
    return JSON.parse(JSON.stringify(data)) as T
  }
}

export * from './templateCompiler'
