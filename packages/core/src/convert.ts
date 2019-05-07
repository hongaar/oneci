import { Spec } from '@oneci/spec'
import { Adapter } from '@oneci/adapter-base'

function capitalizeFirstLetter (text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function loadAdapter<T = Adapter> (format: string): T {
  const className = `${capitalizeFirstLetter(format)}Adapter`
  const adapterModule = require(`@oneci/adapter-${format}`)
  const AdapterClass = adapterModule[className] as typeof Adapter

  return (new AdapterClass() as unknown) as T
}

export function convert (data: Spec, adapterInstance: Adapter) {
  return adapterInstance.convert(data)
}
