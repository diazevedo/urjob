import api from '~/services/api';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { APP_ID, APP_KEY } from '@env';
import { addJobs } from './actions';
import data from '~/services/data/mock';
export function* getJobs({ payload }) {
  console.tron.log('chegou');
  try {
    const { page, sort_by, searchedPosition } = payload;

    // const response = yield call(
    //   api.get,
    //   `https://api.adzuna.com/v1/api/jobs/au/search/${page}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=100&content-type=application/json`,
    //   {
    //     params: { what: searchedPosition, sort_by: sort_by },
    //   },
    // );

    // console.tron.log('response.data.results');
    // console.tron.log(response.data.results);
    // yield put(addJobs({ jobs: response.data.results, page }));
    yield put(addJobs({ jobs: data, page }));
  } catch (error) {
    console.tron.log({ error });
  }
}

export default all([
  takeLatest('@jobs/GET_JOBS_REQUEST', getJobs),
  takeLatest('@jobs/GET_MORE_JOBS_REQUEST', getJobs),
]);
