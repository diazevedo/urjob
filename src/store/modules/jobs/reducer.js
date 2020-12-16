import produce from 'immer';

import prepareJobs from '~/utils/preparePositions';

const INITIAL_STATE = {
  loading: true,
  positions: [],
};

export default function Jobs(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@jobs/ADD_JOBS': {
        console.tron.log('ADD_JOBS', action.payload.jobs, action.payload.page);

        const newPositions = prepareJobs(action.payload.jobs);
        draft.positions =
          action.payload.page > 1 ? [...state, ...newPositions] : newPositions;

        draft.loading = false;
        break;
      }

      case '@jobs/GET_JOBS_REQUEST': {
        console.tron.log('GET_JOBS_REQUEST');
        draft.loading = false;
        break;
      }

      case '@jobs/GET_MORE_JOBS_REQUEST': {
        console.tron.log('GET_MORE_JOBS_REQUEST', action.payload.page);

        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
