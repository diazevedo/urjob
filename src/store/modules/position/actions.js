export function setPosition({ job }) {
  return {
    type: '@position/SET_POSITION',
    payload: { job },
  };
}
