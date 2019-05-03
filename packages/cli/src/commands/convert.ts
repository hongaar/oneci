import { Command, flags } from '@oclif/command'
import { convert } from '@openci/api'
import getStdin = require('get-stdin')
import { getFileContents } from '../common'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as path from 'path'

export default class Convert extends Command {
  static description = 'convert an openci configuration'

  static examples = [
    `$ openci convert --target=travis
$ openci convert .openci.json --target=travis --format=json
$ openci convert .openci.yaml --target=travis
$ echo "..." | openci convert --target=travis --out=.openci.json
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    target: flags.string({
      char: 'f',
      required: true,
      description: 'config target to convert to'
    }),
    out: flags.string({
      char: 'o',
      description: 'write to file instead of stdout'
    }),
    format: flags.string({
      char: 'f',
      description: 'file format',
      default: 'yaml',
      options: ['json', 'yaml']
    })
  }

  static args = [
    {
      name: 'file',
      description:
        'if not provided, will autodetect .openci.{yml,yaml,json} files in the working directory'
    }
  ]

  async run () {
    const { args, flags } = this.parse(Convert)

    const input = await getStdin()

    if (input && args.file) {
      throw new Error('Both stdin and FILE argument are provided')
    }

    try {
      let output
      if (input) {
        output = convert(JSON.parse(input), flags.target)
      } else {
        output = convert(getFileContents(args.file), flags.target)
      }

      let formatted
      if (
        flags.format === 'json' ||
        (flags.out && flags.out.endsWith('.json'))
      ) {
        formatted = JSON.stringify(output, undefined, 2)
      } else {
        const stripped = JSON.parse(JSON.stringify(output))
        formatted = yaml.safeDump(stripped, { indent: 2 })
      }

      if (flags.out) {
        fs.writeFileSync(flags.out, formatted)
      } else {
        this.log(formatted)
      }
    } catch (error) {
      this.error(error.message)
      this.exit(1)
    }
  }
}
