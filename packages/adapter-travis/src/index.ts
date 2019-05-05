import { Adapter } from '@openci/adapter-common'
import { Spec, Script } from '@openci/spec'
import { TravisSpec } from './types'

function createLanguage (input: Spec) {
  return 'node_js'
}

function createNodeJs (input: Spec) {
  return '10'
}

function createStages (input: Spec) {
  if (!input.jobs) {
    return
  }

  return input.jobs.reduce<string[]>(
    (acc, cur) => (cur.group ? [...acc, cur.group] : acc),
    []
  )
}

function createScript (input: Spec, jobScripts: Script = []) {
  return input.always ? [...input.always, ...jobScripts] : jobScripts
}

function createJobs (input: Spec) {
  if (!input.jobs) {
    return []
  }

  return {
    include: input.jobs.map(job => ({
      name: job.name,
      stage: job.group,
      script: createScript(input, job.script)
    }))
  }
}

export default class TravisAdapter extends Adapter {
  public schemaUrl = 'http://json.schemastore.org/travis'

  convert (input: Spec) {
    return {
      language: createLanguage(input),
      node_js: createNodeJs(input),
      stages: createStages(input),
      jobs: createJobs(input)
    } as TravisSpec
  }
}
