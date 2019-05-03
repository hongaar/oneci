export interface AdapterOptions {
  schemaUrl?: string
}

export class Adapter {
  public readonly schemaUrl?: string

  validate () {
    return true
  }
}

export default Adapter
