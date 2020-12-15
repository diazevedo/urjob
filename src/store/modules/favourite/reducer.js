import produce from 'immer';

const INITIAL_STATE = {
  favourites: [{ job: 'ksdmkasmd' }],
};

export default function favourites(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@favourite/ADD_TO_FAVOURITE': {
        draft.favourites.puhs(action.payload.job);
        break;
      }

      case '@favourite/REMOVE_FROM_FAVOURITE': {
        break;
      }

      default:
        return state;
    }
  });
}
