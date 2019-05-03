import { Command, flags } from '@oclif/command'
import { validate } from '@openci/api'
import * as fs from 'fs'
import getStdin = require('get-stdin')
import * as yaml from 'js-yaml'
import * as path from 'path'

function getFileContents (fileName?: string) {
  let filePath
  if (fileName) {
    filePath = path.resolve(process.cwd(), fileName)
    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${fileName} does not seem to exist`)
    }
  } else {
    // @todo iterate parent directories
    if (fs.existsSync('.openci.json')) {
      filePath = path.join(process.cwd(), '.openci.json')
    } else if (fs.existsSync('.openci.yaml')) {
      filePath = path.join(process.cwd(), '.openci.yaml')
    } else if (fs.existsSync('.openci.yml')) {
      filePath = path.join(process.cwd(), '.openci.yml')
    } else {
      throw new Error('Could not detect an openci config file')
    }
  }

  if (filePath.endsWith('.json')) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } else {
    return yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
  }
}

export default class Validate extends Command {
  static description = 'validate an openci configuration'

  static examples = [
    `$ openci validate
$ openci validate .openci.json
$ openci validate .openci.yaml
$ echo "..." | openci validate
`
  ]

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [{ name: 'file' }]

  async run () {
    const { args } = this.parse(Validate)

    const input = await getStdin()

    if (input && args.file) {
      throw new Error('Both stdin and FILE argument are provided')
    }

    try {
      if (input) {
        validate(JSON.parse(input))
      } else {
        validate(getFileContents(args.file))
      }
    } catch (error) {
      this.error(error.message)
      this.exit(1)
    }
  }
}
