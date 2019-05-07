import { Adapter, Template } from '@oneci/adapter-base'
import { Spec, Script } from '@oneci/spec'
import { TravisSpec, Job } from './types'

export class TravisAdapter extends Adapter<TravisSpec> {
  public schemaUrl = 'http://json.schemastore.org/travis'
  public template: Template<TravisSpec> = {
    language: createLanguage,
    node_js: createNodeJs,
    stages: createStages,
    jobs: {
      include: createJobs
    }
  }
}

function createLanguage (input: Spec): Job['language'] {
  return 'node_js'
}

function createNodeJs (input: Spec) {
  return 10
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

  return input.jobs.map(job => ({
    name: job.name,
    stage: job.group,
    script: createScript(input, job.script)
  }))
}
