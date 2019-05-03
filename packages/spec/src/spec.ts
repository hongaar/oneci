export type Script = string | string[]

export type Job = {
  name?: string;
  group?: string;
  script?: Script;
}

export type Spec = {
  jobs?: Job[];
}
