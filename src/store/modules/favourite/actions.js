export function addJobToFavourite(job) {
  return {
    type: '@favourite/ADD_TO_FAVOURITE',
    payload: { job },
  };
}

export function removeJobFromFavourite({ id }) {
  return {
    type: '@favourite/REMOVE_FROM_FAVOURITE',
    payload: { id },
  };
}
