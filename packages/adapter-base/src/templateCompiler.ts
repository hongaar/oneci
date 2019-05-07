import { Spec } from '@oneci/spec'

type TemplateFunction<T> = (data: Spec) => T

type Node =
  | any
  | {
    [key: string]: Node | any;
  }

export type Template<T> = {
  [P in keyof T]: T[P] | Template<T[P] | TemplateFunction<T[P]>>
}

function compilePart (value: Node, data: Spec) {
  if (typeof value === 'function') {
    return value(data)
  }

  if (typeof value === 'object') {
    return compile(value, data)
  }

  return value
}

export function compile<FS extends Node> (node: Template<FS>, data: Spec): FS {
  function reducer (obj: object, [key, value]: [keyof FS, Node]) {
    return {
      ...obj,
      [key]: compilePart(value, data)
    }
  }

  const entries = Object.entries(node)

  return entries.reduce(reducer, {}) as FS
}
