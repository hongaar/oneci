# @openci/cli

[![exivity](https://img.shields.io/badge/♥-exivity-5cccea.svg)](https://exivity.com)
[![Version](https://img.shields.io/npm/v/@openci/cli.svg)](https://npmjs.org/package/@openci/cli)
[![License](https://img.shields.io/npm/l/@openci/cli.svg)](https://github.com/exivity/openci/blob/master/package.json)

<!-- toc -->
* [@openci/cli](#opencicli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @openci/cli
$ openci COMMAND
running command...
$ openci (-v|--version|version)
@openci/cli/0.0.0 win32-x64 node-v10.13.0
$ openci --help [COMMAND]
USAGE
  $ openci COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`openci convert [FILE]`](#openci-convert-file)
* [`openci help [COMMAND]`](#openci-help-command)
* [`openci validate [FILE]`](#openci-validate-file)

## `openci convert [FILE]`

convert an openci configuration

```
USAGE
  $ openci convert [FILE]

ARGUMENTS
  FILE  if not provided, will autodetect .openci.{yml,yaml,json} files in the working directory

OPTIONS
  -a, --append            append to existing file if --out is given
  -f, --format=json|yaml  [default: yaml] file format
  -h, --help              show CLI help
  -o, --out=out           write to file instead of stdout
  -t, --target=target     (required) config target to convert to

EXAMPLE
  $ openci convert --target=travis
  $ openci convert my.openci.yaml --target=travis --format=json
  $ echo "..." | openci convert --target=travis --out=.travis.json
```

_See code: [lib\commands\convert.js](https://github.com/exivity/openci/blob/v0.0.0/lib\commands\convert.js)_

## `openci help [COMMAND]`

display help for openci

```
USAGE
  $ openci help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `openci validate [FILE]`

validate an openci configuration

```
USAGE
  $ openci validate [FILE]

ARGUMENTS
  FILE  if not provided, will autodetect .openci.{yml,yaml,json} files in the working directory

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ openci validate
  $ openci validate .openci.json
  $ openci validate .openci.yaml
  $ echo "..." | openci validate
```

_See code: [lib\commands\validate.js](https://github.com/exivity/openci/blob/v0.0.0/lib\commands\validate.js)_
<!-- commandsstop -->
