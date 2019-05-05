import { Adapter } from '@openci/adapter-common'
import { Spec } from '@openci/spec'
import { TravisSpec } from './types'

export default class TravisAdapter extends Adapter {
  public schemaUrl = 'http://json.schemastore.org/travis'

  convert (input: Spec) {
    const travis: TravisSpec = {}

    // Read jobs from Spec
    if (input.jobs) {
      travis.jobs = {
        include: []
      }
      input.jobs.forEach(job => {
        travis.jobs!.include!.push({
          name: job.name,
          stage: job.group,
          script: job.script
        })
      })
    }

    return travis
  }
}
