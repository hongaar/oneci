# @oneci/cli

[![exivity](https://img.shields.io/badge/♥-exivity-5cccea.svg)](https://exivity.com)
[![Version](https://img.shields.io/npm/v/@oneci/cli.svg)](https://npmjs.org/package/@oneci/cli)
[![License](https://img.shields.io/npm/l/@oneci/cli.svg)](https://github.com/exivity/oneci/blob/master/package.json)

<!-- toc -->
* [@oneci/cli](#onecicli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @oneci/cli
$ oneci COMMAND
running command...
$ oneci (-v|--version|version)
@oneci/cli/0.0.0 win32-x64 node-v10.13.0
$ oneci --help [COMMAND]
USAGE
  $ oneci COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oneci convert [FILE]`](#oneci-convert-file)
* [`oneci help [COMMAND]`](#oneci-help-command)
* [`oneci validate [FILE]`](#oneci-validate-file)

## `oneci convert [FILE]`

convert an oneci configuration

```
USAGE
  $ oneci convert [FILE]

ARGUMENTS
  FILE  if not provided, will autodetect .oneci.{yml,yaml,json} files in the working directory

OPTIONS
  -a, --append            append to existing file if --out is given
  -f, --format=json|yaml  [default: yaml] file format
  -h, --help              show CLI help
  -o, --out=out           write to file instead of stdout
  -t, --target=target     (required) config target to convert to

EXAMPLE
  $ oneci convert --target=travis
  $ oneci convert my.oneci.yaml --target=travis --format=json
  $ echo "..." | oneci convert --target=travis --out=.travis.json
```

_See code: [lib\commands\convert.js](https://github.com/exivity/oneci/blob/v0.0.0/lib\commands\convert.js)_

## `oneci help [COMMAND]`

display help for oneci

```
USAGE
  $ oneci help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `oneci validate [FILE]`

validate an oneci configuration

```
USAGE
  $ oneci validate [FILE]

ARGUMENTS
  FILE  if not provided, will autodetect .oneci.{yml,yaml,json} files in the working directory

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ oneci validate
  $ oneci validate .oneci.json
  $ oneci validate .oneci.yaml
  $ echo "..." | oneci validate
```

_See code: [lib\commands\validate.js](https://github.com/exivity/oneci/blob/v0.0.0/lib\commands\validate.js)_
<!-- commandsstop -->
