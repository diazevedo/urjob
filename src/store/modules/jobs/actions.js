export function addJobs({ jobs, page }) {
  return {
    type: '@jobs/ADD_JOBS',
    payload: { jobs, page },
  };
}

export function getJobsRequest({ what, sort_by, page }) {
  return {
    type: '@jobs/GET_JOBS_REQUEST',
    payload: { what, sort_by, page },
  };
}

export function getMoreJobsRequest({ what, sort_by, page }) {
  return {
    type: '@jobs/GET_MORE_JOBS_REQUEST',
    payload: { what, sort_by, page },
  };
}
