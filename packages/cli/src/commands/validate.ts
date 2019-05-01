import { Command, flags } from '@oclif/command'
import { validate } from '@openci/api'

async function read(stream: any) {
  let buffer = Buffer.alloc(0);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  return buffer.toString('utf8');
}

export default class Validate extends Command {
  static description = 'validate an openci configuration'

  static examples = [
    `$ openci validate
$ openci validate .openci.json
$ openci validate .openci.yaml
$ cat "{}" | openci validate
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run () {
    const { args, flags } = this.parse(Validate)

    const input = await read(process.stdin)

    if (input && args.file) {
      throw new Error('Both stdin and FILE arg is provided')
    }

    if (input) {

    } else if (args.file) {
      this.log(`you input --force and --file: ${args.file}`)
    } else {

    }

  }
}
