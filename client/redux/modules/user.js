const init = {};

export default function user(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return { ...state };
  }
}
