export type Spec = {
  /**
   * Docker image to use for this pipeline.
   */
  image: Image;

  /**
   * Execute these scripts for all jobs (before job specific scripts).
   */
  always?: Script;

  /**
   * List of jobs to execute as part of the pipeline.
   */
  jobs?: Job[];
}

export type Image = string

export type Job = {
  /**
   * Descriptive name for the job, no functional effect.
   */
  name?: string;

  /**
   * Run all jobs in this group in parallel.
   */
  group?: string;

  /**
   * Override pipeline image for this job.
   */
  image?: Image;

  /**
   * Execute these scripts as part of the job.
   */
  script?: Script;
}

export type Script = string[]
