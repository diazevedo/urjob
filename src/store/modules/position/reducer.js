import produce from 'immer';

const INITIAL_STATE = {
  current: {},
};

export default function position(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@position/SET_POSITION': {
        draft.current = action.payload.id;
        break;
      }

      default:
        return state;
    }
  });
}
