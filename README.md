# openci

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

OpenCI specification &amp; tools (in development)

_help wanted_

## goal

The goal of this project is to create a vendor agnostic configuration format for CI/CD runners to make it easier for projects to switch platforms, and tooling around it.

## spec

The to be developed OpenCI specification would incorporate common features from various CI vendors, like steps, conditions, environments, matrix expansion, deployment, etc.

## adapters

Various adapters could be developed for conversion to/from the OpenCI spec to platform specific formats to make migrations easy.

## packages

In order to help adopt the specs, various tools could be created alongside the spec in a monorepo containing these packages:

- spec: the spec itself as markdown doc and json-schema (or typescript or some other convenient interface)
- adapter-\*: adapters for various ci platforms
- core: functions to validate and convert a configuration object into other formats
- cli: wrapper around the core for command line usage
- web: wrapper around the core for web usage

## list of ci platforms

There are many, but let's start with:

- Travis
- AppVeyor
- GitLab runner
- Bitbucket Pipelines
- CircleCI
- Drone
