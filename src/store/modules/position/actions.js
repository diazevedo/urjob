export function setPosition({ id }) {
  return {
    type: '@position/SET_POSITION',
    payload: { id },
  };
}
