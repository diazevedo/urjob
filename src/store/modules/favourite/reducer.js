import produce from 'immer';

const INITIAL_STATE = {
  favourites: [],
};

export default function favourites(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@favourite/ADD_TO_FAVOURITE': {
        console.tron.log(action.payload);
        draft.favourites.push(action.payload.job.job);
        break;
      }

      case '@favourite/REMOVE_FROM_FAVOURITE': {
        draft.favourites = draft.favourites.filter(
          (item) => item.id !== action.payload.id,
        );

        break;
      }

      case '@favourite/REMOVE_ALL': {
        draft.favourites = [];
        break;
      }

      default:
        return state;
    }
  });
}
