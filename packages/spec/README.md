# @openci/spec

## top level attributes

### `jobs`

_`array<Job>`_

Specify one or more jobs to run in sequence. Optionally group in stages, to run sequential and in parallel at the same time.

#### examples

```yaml
jobs:
  - [Job]
  - [Job]
```

## type definitions

### `Job`

_`object`_

#### attributes

- name _`string` (optional)_: descriptive name for the job, no functional effect
- group _`string` (optional)_: run all jobs in this group in parallel
- script _`Script` (optional)_: execute these scripts as part of the job

#### examples

```yaml
# Runs three jobs, the first two run in parallel, the last one
# only runs when the first two were successful.
jobs:
  - name: lint
    group: test
    script: [Script]
  - name: build
    group: test
    script: [Script]
  - group: deploy
    script: [Script]
```

## `Script`

_`string | array<string>`_

One or more commands to execute as part of a job

#### examples

```yaml
# This config defines two jobs, one runs the tests,
# the other runs two scripts to deploy and ping slack.
jobs:
  - script: test.sh
  - script:
      - deploy.sh
      - ping-slack.sh
```
