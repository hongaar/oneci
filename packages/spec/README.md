# @oneci/spec

## top level attributes

### `image`

_`Image`_

Docker image to use for this pipeline.

#### examples

```yaml
image: node
```

### `always`

_`Script`_

Execute these scripts for all jobs (before job specific scripts).

#### examples

```yaml
always:
  - yarn
```

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

### `Image`

_`string`_

Docker image.

### `Job`

_`object`_

#### properties

- name _`string` (optional)_: Descriptive name for the job, no functional effect.
- group _`string` (optional)_: Run all jobs in this group in parallel.
- image _`string` (optional)_: Override pipeline image for this job.
- script _`Script` (optional)_: Execute these scripts as part of the job.

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
    image: mesosphere/aws-cli
    script: [Script]
```

## `Script`

_`array<string>`_

One or more commands to execute as part of a job

#### examples

```yaml
# This config defines two jobs, one runs the tests,
# the other runs two scripts to deploy and ping slack.
jobs:
  - script:
      - test.sh
  - script:
      - deploy.sh
      - ping-slack.sh
```
